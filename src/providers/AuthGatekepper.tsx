import { PropsWithChildren, use } from "react";
import { AuthSession } from "../contexts/AuthSession";
import { Effect } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";

export function AuthGatekepper({ children }: PropsWithChildren) {
  const session = use(Effect.runPromise(getSupanaseSessionProgram));

  return !session ? (
    <>hello</>
  ) : (
    <AuthSession value={session}>{children}</AuthSession>
  );
}
