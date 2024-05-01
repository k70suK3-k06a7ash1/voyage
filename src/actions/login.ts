import { supabase } from "@/libs/supabase";

const switchRedirectDomain = (isProd: boolean) =>
  isProd ? "https://k70suk3-k06a7ash1.github.io" : "http://localhost:5173";

export const loginAction = async (_: unknown, formData: FormData) => {
  console.log(`${switchRedirectDomain(import.meta.env.PROD)}/voyage`);
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: `${switchRedirectDomain(import.meta.env.PROD)}/voyage/`,
    },
  });

  return error;
};
