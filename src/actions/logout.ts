import { supabase } from "@/libs/supabase";
import { redirect } from "@tanstack/react-router";

export const logoutAction = async () => {
  const { error: _ } = await supabase.auth.signOut();
  redirect({ to: "/" });
};
