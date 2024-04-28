import { use } from "react";
import { Suspense } from "react";
import { Podcast } from "./components/Podcast";
import { Footer } from "./components/Footer";
import { SiteContext } from "./contexts/SiteContenxt";
import { AuthSession } from "./contexts/AuthSession";

function App() {
  const authSession = use(AuthSession);
  return (
    <SiteContext value={{ name: "Bob" }}>
      <Suspense fallback={<>loading</>}>
        <Podcast />
      </Suspense>
      <p>{authSession?.user.email}</p>
      <Footer />
    </SiteContext>
  );
}

export default App;
