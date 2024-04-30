import { AuthError, Session } from "@supabase/supabase-js";
import { supabase } from "../libs/supabase";
import { Effect } from "effect";

class ResponseError extends Error {}
class UnknownSessionError extends Error {}
export const getSupanaseSessionProgram: Effect.Effect<
  Session | null,
  ResponseError | AuthError | UnknownSessionError
> = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.auth.getSession(),
    catch: () => new ResponseError(),
  });

  // waiting
  // yield* Effect.sleep(1000);

  switch (true) {
    case response.error instanceof AuthError:
      return yield* Effect.fail(new AuthError("auth error"));
    case response.data?.session === null:
      return yield* Effect.succeed(null);
    default:
      return yield* Effect.succeed(response.data.session);
  }
});
