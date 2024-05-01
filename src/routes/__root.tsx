import { ButtomBar } from "@/components/BottomBar";
import { Spinner } from "@/components/Spinner";
import { Header } from "@/objects/Header";
// import { Menu } from "@/objects/Menu";
import { AuthGatekepper } from "@/providers/AuthGatekepper";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Suspense fallback={<Spinner />}>
        <AuthGatekepper>
          <Header />
          {/* <Menu /> */}
          <Outlet />
          <ButtomBar />
        </AuthGatekepper>
        {/* <TanStackRouterDevtools /> */}
      </Suspense>
    </>
  ),
});
