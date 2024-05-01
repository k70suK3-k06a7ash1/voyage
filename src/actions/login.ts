import { supabase } from "@/libs/supabase";

const switchRedirectUrl = (isProd: boolean) =>
  isProd
    ? "https://k70suk3-k06a7ash1.github.io/voyage/"
    : "http://localhost:5173/voyage/";

export const loginAction = async (_: unknown, formData: FormData) => {
  console.log(`${switchRedirectUrl(import.meta.env.PROD)}`);
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: `${switchRedirectUrl(import.meta.env.PROD)}`,
    },
  });

  return error;
};
