import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthGatekepper } from "./providers/AuthGatekepper.tsx";
import { Spinner } from "./components/Spinner/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <AuthGatekepper>
        <App />
      </AuthGatekepper>
    </Suspense>
  </React.StrictMode>
);
