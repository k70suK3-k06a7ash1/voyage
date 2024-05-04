import { getTravelsProgram } from "@/effects/getTravelProgram";
import { Effect, Match } from "effect";
import { PropsWithChildren, use, useMemo } from "react";

export const TravelGatekeeper = ({ children }: PropsWithChildren) => {
  const travels = use(useMemo(() => Effect.runPromise(getTravelsProgram), []));

  return Match.value(travels).pipe(
    Match.when(
      (e) => e.length === 0,
      () => <>new travel</>
    ),
    Match.orElse(() => <>{children}</>)
  );
};
