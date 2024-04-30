import { useActionState } from "react";
import style from "./index.module.css";
import { Spacer } from "../../components/Spacer";
import { loginAction } from "@/actions/login";

const AuthForm = () => {
  const [error, formAction, isPending] = useActionState(loginAction, undefined);
  console.log(error);
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
