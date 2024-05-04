import { supabase } from "@/libs/supabase";
import { Effect } from "effect";

class ResponseError {}
export const getTravelsProgram = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.from("travels").select(),
    catch: () => new ResponseError(),
  });

  return response.data;
  //   switch (response) {
  //     case response.error instanceof Error:
  //       return yield* Effect.fail(new Error());
  //   }
});
