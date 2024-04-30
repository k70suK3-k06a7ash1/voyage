import { supabase } from "@/libs/supabase";

export const loginAction = async (_: any, formData: FormData) => {
  console.log(formData.get("email"));
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: "http://localhost:5173/voyage",
    },
  });

  return error;
};
