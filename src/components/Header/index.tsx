import style from "./index.module.css";
import { logoutAction } from "@/actions/logout";

export const Header = () => (
  <form className={style.container} action={logoutAction}>
    <button className={style.item}>S</button>
  </form>
);
