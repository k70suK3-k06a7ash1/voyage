import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  // createHashHistory,
  // createMemoryHistory,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });
// const hashHistory = createHashHistory();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
ReactDOM.createRoot(document.getElementById("root")!, {
  onUncaughtError: (error, errorInfo) => {
    // ... log error report
    console.error({ error, errorInfo });
  },
  onCaughtError: (error, errorInfo) => {
    // ... log error report
    console.error({ error, errorInfo });
  },
  onRecoverableError: (error, errorInfo) => {
    // ... log error report
    console.error({ error, errorInfo });
  },
}).render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/destyle.css@3.0.0/destyle.css"
    />
    {/* {import.meta.env.PROD ? (
      <RouterProvider
        router={router}
        // basepath="root"
        //basepath="/voyage/"
        history={hashHistory}
      />
    ) : ( */}
    <RouterProvider
      router={router}
      basepath="/voyage/"
      // history={hashHistory}
    />
    {/* )} */}
  </React.StrictMode>
);
