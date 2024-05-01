import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: "127.0.0.1",
  // },
  base: "/voyage/",
  plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
});
