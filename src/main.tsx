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
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
