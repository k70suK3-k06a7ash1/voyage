import { getTravelsProgram } from "@/effects/getTravelProgram";
import { Effect, Match } from "effect";
import { PropsWithChildren, use, useMemo } from "react";

export const TravelGatekeeper = ({ children }: PropsWithChildren) => {
  const travels = use(useMemo(() => Effect.runPromise(getTravelsProgram), []));
  console.log(travels);

  const result = Match.value(travels).pipe(
    Match.when(Match.null, () => <>new travel</>),
    Match.when(
      (e) => e.length === 0,
      () => <>new travel</>
    ),
    Match.orElse(() => <>{children}</>)
  );

  return result;
};
