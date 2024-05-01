import { supabase } from "@/libs/supabase";
import { redirect } from "@tanstack/react-router";

const switchRedirectUrl = (isProd: boolean) =>
  isProd
    ? "https://k70suk3-k06a7ash1.github.io/voyage/"
    : "http://localhost:5173/voyage/";

export const loginAction = async (_: unknown, formData: FormData) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: `${switchRedirectUrl(import.meta.env.PROD)}`,
    },
  });

  if (error) return error;

  throw redirect({ to: "/authorized" });
};
