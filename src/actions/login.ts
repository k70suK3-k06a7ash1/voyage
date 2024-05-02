import { supabase } from "@/libs/supabase";
import { AuthError } from "@supabase/supabase-js";

const switchRedirectUrl = (isProd: boolean) =>
  isProd
    ? "https://k70suk3-k06a7ash1.github.io/voyage/"
    : "http://localhost:5173/voyage/";

type Success = {
  type: "success";
};

type Error = {
  type: "error";
  body: AuthError;
};

type Result = Error | Success | undefined;

export const loginAction = async (
  _: unknown,
  formData: FormData
): Promise<Result> => {
  const { error } = await supabase.auth.signInWithOtp({
    email: formData?.get("email")?.toString() ?? "",
    options: {
      emailRedirectTo: `${switchRedirectUrl(import.meta.env.PROD)}`,
    },
  });

  if (error) return { type: "error", body: error };
  return { type: "success" };
};
