import { Link } from "@tanstack/react-router";
import style from "./index.module.css";
export const ButtomBar = () => (
  <nav className={style.container}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/hello">Hello</Link>
  </nav>
);
