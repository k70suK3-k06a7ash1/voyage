import { supabase } from "@/libs/supabase";
import { redirect } from "@tanstack/react-router";

export const loginAction = async (_: any, formData: FormData) => {
  console.log(formData.get("email"));
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: "https://k70suk3-k06a7ash1.github.io/voyage",
    },
  });

  return error;
  void redirect({ to: "/" });
};
