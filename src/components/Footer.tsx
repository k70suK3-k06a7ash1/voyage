// @ts-ignore
import { use } from "react";
import { SiteContext } from "../contexts/SiteContenxt";
export function Footer() {
  const { name } = use(SiteContext);
  return (
    <footer>
      <p>©{name}</p>
    </footer>
  );
}
