import { supabase } from "@/libs/supabase";

export const logoutAction = async () => {
  const { error: _ } = await supabase.auth.signOut();
};
