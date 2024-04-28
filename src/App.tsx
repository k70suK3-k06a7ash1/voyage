// @ts-ignore
import { useActionState, useOptimistic, use, cache } from "react";
import { Suspense } from "react";
import { Podcast } from "./components/Podcast";
import { Footer } from "./components/Footer";
import { SiteContext } from "./contexts/SiteContenxt";

function App() {
  return (
    // @ts-ignore
    <SiteContext value={{ name: "Bob" }}>
      <Suspense fallback={<>loading</>}>
        <Podcast />
      </Suspense>
      <Footer />
    </SiteContext>
  );
}

export default App;
