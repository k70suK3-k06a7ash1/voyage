import { JSX } from "react";
import style from "./index.module.css";
export const Input = (props: JSX.IntrinsicElements["input"]) => {
  const { children, className, ...rest } = props;
  return <input className={`${style.neumorphism} ${className}`} {...rest} />;
};
