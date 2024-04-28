import { PropsWithChildren, use } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../libs/supabase";
import { AuthSession } from "../contexts/AuthSession";

export default function AuthProvider({ children }: PropsWithChildren) {
  const session = use<Session | null>(
    supabase.auth.getSession().then(({ data: { session } }) => {
      return session;
    })
  );
  console.log(session);

  return !session ? (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  ) : (
    <AuthSession value={session}>{children}</AuthSession>
  );
}
