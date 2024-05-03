import { PropsWithChildren, use, useMemo } from "react";
import { AuthSessionContext } from "../contexts/AuthSessionContext";
import { Effect, Match } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Session } from "@supabase/supabase-js";
import { LogInForm } from "../objects/LogInForm";
// import { supabase } from "@/libs/supabase";

// const counterReducer = (state: number, action: { type: "INCREMENT" }) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     default:
//       return state;
//   }
// };

export function AuthGatekeeper({ children }: PropsWithChildren) {
  // const [counter, dispatch] = useReducer(counterReducer, 0);
  // supabase.auth.onAuthStateChange((_event) => {
  //   dispatch({ type: "INCREMENT" });
  // });
  const session = use(
    useMemo(() => Effect.runPromise(getSupanaseSessionProgram), [])
  );

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
