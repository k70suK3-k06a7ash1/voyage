import { Spinner } from "@/components/Spinner";
// import { AuthGatekepper } from "@/providers/AuthGatekepper";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Suspense fallback={<Spinner />}>
        {/* <AuthGatekepper> */}
        <Outlet />
        {/* </AuthGatekepper> */}
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
