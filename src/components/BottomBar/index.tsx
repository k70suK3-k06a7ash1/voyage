import { Link } from "@tanstack/react-router";
import style from "./index.module.css";
export const ButtomBar = () => (
  <nav className={style.container}>
    <Link to="/" className={style.neumorphismButton}>
      Home
    </Link>
    <Link to="/about" className={style.neumorphismButton}>
      About
    </Link>
    <Link to="/hello" className={style.neumorphismButton}>
      Hello
    </Link>
  </nav>
);
