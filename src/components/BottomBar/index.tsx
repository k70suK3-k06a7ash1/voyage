import { Link } from "@tanstack/react-router";
import style from "./index.module.css";
export const ButtomBar = () => (
  <nav className={style.container}>
    <Link to="/about" className={style.block}>
      About
    </Link>
    <Link to="/hello" className={style.block}>
      Hello
    </Link>
  </nav>
);
