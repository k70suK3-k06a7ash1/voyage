import { PropsWithChildren, use } from "react";
// import { supabase } from "../libs/supabase";
import { AuthSession } from "../contexts/AuthSession";
import { Effect } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Spinner } from "../components/Spinner";

export function AuthGatekepper({ children }: PropsWithChildren) {
  const session = use(Effect.runPromise(getSupanaseSessionProgram));

  return !session ? (
    <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      {/* <div className="rounded-lg  h-full sm:h-20 py-4 my-10 flex items-center justify-center shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.4)]"> */}
      <Spinner />
      {/* <p className="w-[70%] text-sm">
          Stay on top of your order status, deals, new messages and more.
          <span className="text-[#7b90fd] cursor-pointer hover:underline">
            Enable notifications
          </span>
        </p> */}
      {/* </div> */}
      {/* <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
        // onlyThirdPartyProviders
      /> */}
    </div>
  ) : (
    <AuthSession value={session}>{children}</AuthSession>
  );
}
