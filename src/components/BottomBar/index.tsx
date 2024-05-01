import style from "./index.module.css";
import { LinkAsButton } from "../LinkAsButton";
export const ButtomBar = () => (
  <nav className={style.container}>
    <LinkAsButton to="/">Home</LinkAsButton>
    <LinkAsButton to="/about">About</LinkAsButton>
    <LinkAsButton to="/hello">Hello</LinkAsButton>
  </nav>
);
