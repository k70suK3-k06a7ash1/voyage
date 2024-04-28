import { PropsWithChildren, use } from "react";
// import { supabase } from "../libs/supabase";
import { AuthSession } from "../contexts/AuthSession";
import { Effect } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Spinner } from "../components/Spinner";

export function AuthGatekepper({ children }: PropsWithChildren) {
  const session = use(Effect.runPromise(getSupanaseSessionProgram));

  return !session ? (
    <Spinner />
  ) : (
    <AuthSession value={session}>{children}</AuthSession>
  );
}
