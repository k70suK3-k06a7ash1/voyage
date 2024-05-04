import { supabase } from "@/libs/supabase";
import { Effect, Option } from "effect";

class ResponseError {}
export const getTravelsProgram = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.from("travels").select(),
    catch: () => new ResponseError(),
  });
  const data = response.data;
  return Option.getOrNull(Option.some(data)) ?? [];
});
