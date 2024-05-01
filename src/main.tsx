import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  // createMemoryHistory,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// const memoryHistory = createMemoryHistory({
//   initialEntries: ["/voyage"],
// });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      basepath="voyage"
      router={router}

      //  history={memoryHistory}
    />
  </React.StrictMode>
);
