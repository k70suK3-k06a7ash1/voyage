import { Console, Data, Effect } from "effect";
import { assign, setup } from "xstate";
export type MachineParams<A extends Record<string, Record<string, any>>> =
  keyof A extends infer Type
    ? Type extends keyof A
      ? keyof A[Type] extends ""
        ? { readonly type: Type }
        : { readonly type: Type; readonly params: A[Type] }
      : never
    : never;

export interface Context {
  readonly currentTime: number;
  readonly audioRef: HTMLAudioElement | null;
  readonly audioContext: AudioContext | null;
  readonly trackSource: MediaElementAudioSourceNode | null;
}

export type Events = MachineParams<{
  play: {};
  restart: {};
  end: {};
  pause: {};
  loaded: {};
  loading: { readonly audioRef: HTMLAudioElement };
  error: { readonly message: unknown };
  "init-error": { readonly message: unknown };
  time: { readonly updatedTime: number };
}>;

class OnLoadError extends Data.TaggedError("OnLoadError")<{
  context: Partial<Context>;
  message: string;
}> {}

class OnLoadSuccess extends Data.TaggedClass("OnLoadSuccess")<{
  context: Partial<Context>;
}> {}

export const onLoad = ({
  audioRef,
  context,
  trackSource,
}: {
  audioRef: HTMLAudioElement;
  context: AudioContext | null;
  trackSource: MediaElementAudioSourceNode | null;
}) =>
  Effect.gen(function* (_) {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext || false;

    if (!AudioContext) {
      return yield* _(
        Effect.fail(
          new OnLoadError({
            context: { audioRef },
            message: "AudioContext not supported",
          })
        )
      );
    }

    const audioContext = context ?? new AudioContext();
    const audioConfig = yield* _(
      Effect.try({
        try: () => {
          const newTrackSource =
            trackSource ?? audioContext.createMediaElementSource(audioRef);

          newTrackSource.connect(audioContext.destination);

          return { trackSource: newTrackSource, audioContext } as const;
        },
        catch: () =>
          new OnLoadError({
            context: { audioRef },
            message: "Error connecting createMediaElementSource",
          }),
      })
    );

    return new OnLoadSuccess({
      context: {
        audioRef,
        audioContext: audioConfig.audioContext,
        trackSource: audioConfig.trackSource,
      },
    });
  });

export const onPlay = ({
  audioRef,
  audioContext,
}: {
  audioRef: HTMLAudioElement | null;
  audioContext: AudioContext | null;
}) =>
  Effect.gen(function* (_) {
    if (audioRef === null) {
      return yield* _(Effect.die("Missing audio ref" as const));
    } else if (audioContext === null) {
      return yield* _(Effect.die("Missing audio context" as const));
    }

    yield* _(Console.log(`Playing audio: ${audioRef.src}`));

    if (audioContext.state === "suspended") {
      yield* _(Effect.promise(() => audioContext.resume()));
    }

    return yield* _(Effect.promise(() => audioRef.play()));
  });

export const onPause = ({ audioRef }: { audioRef: HTMLAudioElement | null }) =>
  Effect.gen(function* (_) {
    if (audioRef === null) {
      return yield* _(Effect.die("Missing audio ref" as const));
    }

    yield* _(Console.log(`Pausing audio at ${audioRef.currentTime}`));

    return yield* _(Effect.sync(() => audioRef.pause()));
  });

export const onRestart = ({
  audioRef,
}: {
  audioRef: HTMLAudioElement | null;
}) =>
  Effect.gen(function* (_) {
    if (audioRef === null) {
      return yield* _(Effect.die("Missing audio ref" as const));
    }

    yield* _(Console.log(`Restarting audio from ${audioRef.currentTime}`));

    return yield* _(
      Effect.promise(async () => {
        audioRef.currentTime = 0; // Restart

        if (audioRef.paused) {
          await audioRef.play();
        }
      })
    );
  });

export const onError = ({ message }: { message: unknown }) =>
  Effect.sync(() =>
    console.error(`Error: ${JSON.stringify(message, null, 2)}`)
  );

export const machine = setup({
  types: {
    events: {} as Events,
    context: {} as Context,
  },
  actions: {
    onPlay: ({ context: { audioRef, audioContext } }) =>
      onPlay({ audioContext, audioRef }).pipe(Effect.runPromise),
    onPause: ({ context: { audioRef } }) =>
      onPause({ audioRef }).pipe(Effect.runSync),
    onRestart: ({ context: { audioRef } }) =>
      onRestart({ audioRef }).pipe(Effect.runPromise),
    onError: (_, { message }: { message: unknown }) =>
      onError({ message }).pipe(Effect.runPromise),
    onLoad: assign(({ self }, { audioRef }: { audioRef: HTMLAudioElement }) =>
      onLoad({ audioRef, context: null, trackSource: null }).pipe(
        Effect.tap(() => Effect.sync(() => self.send({ type: "loaded" }))),
        Effect.tapError(({ message }) =>
          Effect.sync(() => self.send({ type: "error", params: { message } }))
        ),
        Effect.map(({ context }) => context),
        Effect.catchTag("OnLoadError", ({ context }) =>
          Effect.succeed(context)
        ),
        Effect.runSync
      )
    ),
    onUpdateTime: assign((_, { updatedTime }: { updatedTime: number }) => ({
      currentTime: updatedTime,
    })),
  },
}).createMachine({
  context: {
    audioContext: null,
    trackSource: null,
    audioRef: null,
    currentTime: 0,
  },
  id: "Audio Player",
  initial: "Init",
  states: {
    Init: {
      on: {
        loading: {
          target: "Loading",
          actions: {
            type: "onLoad",
            params: ({ event }) => ({ audioRef: event.params.audioRef }),
          },
        },
        "init-error": {
          target: "Error",
          actions: {
            type: "onError",
            params: ({ event }) => ({ message: event.params.message }),
          },
        },
      },
    },
    Loading: {
      on: {
        loaded: {
          target: "Active",
        },
        error: {
          target: "Error",
          actions: {
            type: "onError",
            params: ({ event }) => ({ message: event.params.message }),
          },
        },
      },
    },
    Active: {
      initial: "Paused",
      states: {
        Paused: {
          entry: {
            type: "onPause",
          },
          on: {
            play: {
              target: "Playing",
            },
            restart: {
              target: "Playing",
              actions: {
                type: "onRestart",
              },
            },
          },
        },
        Playing: {
          entry: {
            type: "onPlay",
          },
          on: {
            restart: {
              target: "Playing",
              actions: {
                type: "onRestart",
              },
            },
            end: {
              target: "Paused",
            },
            pause: {
              target: "Paused",
            },
            time: {
              target: "Playing",
              actions: {
                type: "onUpdateTime",
                params: ({ event }) => ({
                  updatedTime: event.params.updatedTime,
                }),
              },
            },
          },
        },
      },
    },
    Error: {
      type: "final",
    },
  },
});
