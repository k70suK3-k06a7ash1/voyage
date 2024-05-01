import { useActionState } from "react";
import { Spacer } from "../../components/Spacer";
import { loginAction } from "@/actions/login";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ErrorMessage } from "@/components/ErrorMessage";

export const LogInForm = () => {
  const [error, formAction, isPending] = useActionState(loginAction, undefined);
  return (
    <aside>
      <h1>Voyage</h1>
      <Spacer size={8} />
      <h2 className="concept">
        Travel humbles the soul, revealing how insignificantly we occupy our
        place in the world.
      </h2>
      <Spacer size={24} />

      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <Spacer size={2} />
        <Input
          id="email"
          disabled={isPending}
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <Spacer size={16} />
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
      </form>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </aside>
  );
};
