import { Effect, Either } from "effect";
import { Schema } from "@effect/schema";

const ApiResponse = Schema.Struct({ title: Schema.String });

export interface ApiResponse extends Schema.Schema.Type<typeof ApiResponse> {}

export const getApiResponseProgram: Effect.Effect<ApiResponse, Error> =
  Effect.gen(function* (_) {
    const response = yield* Effect.tryPromise({
      try: () => fetch("https://syntax.fm/api/shows/latest"),
      catch: () => new Error("failed"),
    });
    if (!response.ok) {
      return yield* Effect.fail(new Error());
    }
    const json = yield* Effect.tryPromise({
      try: () => response.json(),
      catch: () => new Error("error"),
    });
    return yield* _(
      json,
      Schema.decodeUnknownEither(ApiResponse),
      Either.mapLeft(() => new Error())
    );
  });
