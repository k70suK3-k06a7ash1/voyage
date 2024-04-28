import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./providers/Auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<>loading</>}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
