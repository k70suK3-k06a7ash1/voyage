import { Spinner } from "@/components/Spinner";
import { AuthGatekepper } from "@/providers/AuthGatekepper";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/hello" className="[&.active]:font-bold">
          Hello
        </Link>
      </div>
      <hr />
      <Suspense fallback={<Spinner />}>
        <AuthGatekepper>
          <Outlet />
        </AuthGatekepper>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
