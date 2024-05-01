import { PropsWithChildren, use, useMemo } from "react";
import { AuthSession } from "../contexts/AuthSession";
import { Effect, Match } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Session } from "@supabase/supabase-js";
import { LogInForm } from "../objects/LogInForm";

export function AuthGatekepper({ children }: PropsWithChildren) {
  const session = use(
    useMemo(() => Effect.runPromise(getSupanaseSessionProgram), [])
  );

  const match = Match.type<Session | null>().pipe(
    Match.when(Match.null, (_) => <LogInForm />),
    Match.orElse((session) => (
      <AuthSession value={session}>{children}</AuthSession>
    ))
  );

  return match(session);
}
