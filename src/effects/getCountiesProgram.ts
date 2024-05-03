import { supabase } from "@/libs/supabase";
import { Effect } from "effect";

class ResponseError {}
export const getCountriesProgram = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.from("countries").select(),
    catch: () => new ResponseError(),
  });

  return response.data;
  //   switch (response) {
  //     case response.error instanceof Error:
  //       return yield* Effect.fail(new Error());
  //   }
});
