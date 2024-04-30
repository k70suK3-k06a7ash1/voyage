import { supabase } from "@/libs/supabase";

export const logoutAction = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
  // redirect
};
