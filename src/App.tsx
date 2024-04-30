import { use } from "react";
import { Suspense } from "react";
import { Podcast } from "./components/Podcast";
import { Footer } from "./components/Footer";
import { SiteContext } from "./contexts/SiteContenxt";
import { AuthSession } from "./contexts/AuthSession";
import { logoutAction } from "./actions/logout";
// import { Spinner } from "./components/Spinner";

function App() {
  const authSession = use(AuthSession);
  return (
    <SiteContext value={{ name: authSession?.user.email ?? "" }}>
      <form>
        <button formAction={logoutAction}>signout</button>
      </form>
      <Suspense fallback={<>loading</>}>
        <Podcast />
      </Suspense>
      <p>test</p>
      <Footer />
    </SiteContext>
  );
}

export default App;
