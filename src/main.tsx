import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthGatekepper } from "./providers/AuthGatekepper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<>loading</>}>
      <AuthGatekepper>
        <App />
      </AuthGatekepper>
    </Suspense>
  </React.StrictMode>
);
