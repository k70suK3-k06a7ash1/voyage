import { supabase } from "./supabase";

export async function signInWithEmail() {
  //const { data, error } =
  await supabase.auth.signInWithOtp({
    email: "example@email.com",
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: "https://example.com/welcome",
    },
  });
}
