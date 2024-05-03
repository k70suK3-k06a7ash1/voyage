import { useActionState } from "react";
import { Spacer } from "../../components/Spacer";
import { loginAction } from "@/actions/login";
import { Button } from "@/components/Button";
import { ErrorMessage } from "@/components/ErrorMessage";
import { EmailInput } from "@/components/EmailInput";
import { toast } from "react-toastify";

export const LogInForm = () => {
  const [result, formAction, isPending] = useActionState(
    loginAction,
    undefined
  );
  const notify = () =>
    toast(
      "Please check your email and click the link to complete the authentication."
    );

  if (result?.type === "success") notify();

  return (
    <aside className="auth-root-container">
      <div>
        <h1 className="title">Voyage</h1>
        <Spacer size={8} />
        <h2 className="concept">
          Travel humbles the soul, revealing how insignificantly we occupy our
          place in the world.
        </h2>
        <Spacer size={16} />

        <form action={formAction}>
          <label htmlFor="email">Email</label>
          <Spacer size={2} />
          <EmailInput isError={result?.type === "error"} />
          <div
            style={{
              display: result?.type === "error" ? "hidden" : "block",
              height: "0.75rem",
            }}
          >
            {result?.type === "error" && (
              <ErrorMessage>{result.body.message}</ErrorMessage>
            )}
          </div>

          <Spacer size={16} />

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              maxWidth: "30rem",
            }}
          >
            <Button type="submit" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </aside>
  );
};
