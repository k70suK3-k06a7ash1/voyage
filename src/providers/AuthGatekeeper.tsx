import { PropsWithChildren, use, useMemo } from "react";
import { AuthSessionContext } from "../contexts/AuthSessionContext";
import { Effect, Match } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Session } from "@supabase/supabase-js";
import { LogInForm } from "../forms/LogIn";
import { promiseActor } from "@/actors/authActor";

export function AuthGatekeeper({ children }: PropsWithChildren) {
  const session = use(
    useMemo(() => Effect.runPromise(getSupanaseSessionProgram), [])
  );
  promiseActor;
  const match = Match.type<Session | null>().pipe(
    Match.when(Match.null, (_) => <LogInForm />),
    Match.orElse((session) => (
      <AuthSessionContext value={session}>
        <div className="root-container">{children}</div>
      </AuthSessionContext>
    ))
  );

  return match(session);
}
