import { ButtomBar } from "@/components/BottomBar";
import { Spinner } from "@/components/Spinner";
import { Header } from "@/components/Header";
// import { Menu } from "@/objects/Menu";
import { AuthGatekepper } from "@/providers/AuthGatekepper";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";
// import { MainFrame } from "@/styles/MainFrame";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isSmartPhone = () =>
  window.matchMedia && window.matchMedia("(max-device-width: 640px)").matches;

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="root-container">
        <Suspense fallback={<Spinner />}>
          <AuthGatekepper>
            <Header />
            <div className="content">
              <Outlet />
            </div>
            <ButtomBar />
          </AuthGatekepper>
          {/* <TanStackRouterDevtools /> */}
        </Suspense>
        <ToastContainer
          toastClassName="toastOverwrite"
          style={{
            top: "0.5rem",
            padding: `${isSmartPhone() ? "0 0.5rem" : ""}`,
          }}
          position={isSmartPhone() ? "top-center" : "top-left"}
          theme="colored"
          transition={Slide}
        />
      </div>
    </>
  ),
});
