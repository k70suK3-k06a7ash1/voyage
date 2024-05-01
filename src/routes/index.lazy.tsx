import { createLazyFileRoute } from "@tanstack/react-router";
import { use } from "react";
import { Suspense } from "react";
import { Podcast } from "../components/Podcast";
import { Footer } from "../components/Footer";
import { SiteContext } from "../contexts/SiteContenxt";
import { AuthSession } from "../contexts/AuthSession";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const authSession = use(AuthSession);
  return (
    <SiteContext value={{ name: authSession?.user.email ?? "" }}>
      <Suspense fallback={<>loading</>}>
        <Podcast />
      </Suspense>
      <p>test</p>
      <Footer />
    </SiteContext>
  );
}
