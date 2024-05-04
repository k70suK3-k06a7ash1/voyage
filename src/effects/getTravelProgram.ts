import { supabase } from "@/libs/supabase";
import { Effect } from "effect";

class ResponseError {}
export const getTravelsProgram = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.from("travels").select(),
    catch: () => new ResponseError(),
  });

  if (response.data === null) return [];
  return response.data;
});
