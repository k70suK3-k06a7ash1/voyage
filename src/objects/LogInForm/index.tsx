import { useActionState } from "react";
import { Spacer } from "../../components/Spacer";
import { loginAction } from "@/actions/login";
import { Button } from "@/components/Button";
import { ErrorMessage } from "@/components/ErrorMessage";
import { EmailInput } from "@/components/EmailInput";

export const LogInForm = () => {
  const [result, formAction, isPending] = useActionState(
    loginAction,
    undefined
  );

  if (result?.type === "success") console.log("success");
  return (
    <aside>
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

        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="submit" disabled={isPending}>
            Login
          </Button>
        </div>
      </form>
    </aside>
  );
};
