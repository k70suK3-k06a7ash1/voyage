import { JSX } from "react";
import style from "./index.module.css";
export const Button = (props: JSX.IntrinsicElements["button"]) => {
  const { children, className, ...rest } = props;
  return (
    <button className={`${style.neumorphism} ${className}`} {...rest}>
      {props.children}
    </button>
  );
};
