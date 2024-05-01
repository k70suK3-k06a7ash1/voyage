import { PropsWithChildren } from "react";
import style from "./index.module.css";
export const ErrorMessage = ({ children }: PropsWithChildren) => (
  <p className={style.message}> {children}</p>
);
