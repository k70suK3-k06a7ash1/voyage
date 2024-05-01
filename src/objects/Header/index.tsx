import { logoutAction } from "@/actions/logout";

export const Header = () => (
  <form>
    <button formAction={logoutAction}>signout</button>
  </form>
);
