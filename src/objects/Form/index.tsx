import { useActionState } from "react";
import style from "./index.module.css";
import { Spacer } from "../../components/Spacer";
// import { supabase } from "@/libs/supabase";
// import { AuthError } from "@supabase/supabase-js";

// async function action(formData) {
//   console.log({ formData });
//   const { data: _, error } = await supabase.auth.signInWithOtp({
//     email: formData.email,
//     options: {
//       emailRedirectTo: "http://localhost:5173/voyage",
//     },
//   });
//   if (error) throw new Error(error?.message);

//   return {
//     email: "",
//     password: "",
//   };
// }

// type TAuth = {
//   email: string;
// };

const AuthForm = () => {
  const [_auth, formAction, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      console.log(formData.get("email"));
    },
    undefined
  );

  return (
    <div className={style.neumorphismForm}>
      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <Spacer size={2} />
        <input
          id="email"
          disabled={isPending}
          type="email"
          name="email"
          placeholder="Enter your email"
          className={style.neumorphismInput}
        />

        <Spacer size={8} />
        <button
          type="submit"
          disabled={isPending}
          className={style.neumorphismButton}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
