import { supabase } from "@/libs/supabase";
import { Effect } from "effect";
import { PropsWithChildren, use, useMemo } from "react";

class ResponseError {}
const getTravelProgram = Effect.gen(function* (_) {
  const response = yield* Effect.tryPromise({
    try: () => supabase.auth.getSession(),
    catch: () => new ResponseError(),
  });
  return response;
  //   switch (response) {
  //     case response.error instanceof Error:
  //       return yield* Effect.fail(new Error());
  //   }
});

export const TravelGatekeeper = ({ children }: PropsWithChildren) => {
  const travel = use(useMemo(() => Effect.runPromise(getTravelProgram), []));
  console.log(travel);
  if (true) return <>hello</>;
  return <>{children}</>;
};
