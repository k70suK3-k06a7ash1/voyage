import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/authorized")({
  component: () => <div>authorized! please confirm email</div>,
});
