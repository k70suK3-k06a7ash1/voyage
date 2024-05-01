import { ButtomBar } from "@/components/BottomBar";
import { Spinner } from "@/components/Spinner";
import { Header } from "@/components/Header";
// import { Menu } from "@/objects/Menu";
import { AuthGatekepper } from "@/providers/AuthGatekepper";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
import { MainFrame } from "@/styles/MainFrame";

export const Route = createRootRoute({
  component: () => (
    <>
      <Suspense fallback={<Spinner />}>
        <AuthGatekepper>
          <Header />
          {/* <Menu /> */}
          <MainFrame>
            <Outlet />
          </MainFrame>
          <ButtomBar />
        </AuthGatekepper>
        {/* <TanStackRouterDevtools /> */}
      </Suspense>
    </>
  ),
});
