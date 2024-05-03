import { createLazyFileRoute } from "@tanstack/react-router";
import { use } from "react";
import { Suspense } from "react";
import { Podcast } from "../components/Podcast";
import { Footer } from "../components/Footer";
import { SiteContext } from "../contexts/SiteContenxt";
import { AuthSessionContext } from "../contexts/AuthSessionContext";
import { Spacer } from "@/components/Spacer";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const authSession = use(AuthSessionContext);
  return (
    <SiteContext value={{ name: authSession?.user.email ?? "" }}>
      <Spacer size={24} />
      <Suspense fallback={<>loading</>}>
        <Podcast />
        <button>sample</button>
      </Suspense>
      <Footer />
    </SiteContext>
  );
}
