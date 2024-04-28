import { PropsWithChildren, use } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../libs/supabase";
import { AuthSession } from "../contexts/AuthSession";
import { Effect } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";

export default function AuthProvider({ children }: PropsWithChildren) {
  const session = use(Effect.runPromise(getSupanaseSessionProgram));

  return !session ? (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  ) : (
    <AuthSession value={session}>{children}</AuthSession>
  );
}
