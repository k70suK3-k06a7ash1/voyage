import style from "./index.module.css";
import { PropsWithChildren } from "react";
export const MainFrame = ({ children }: PropsWithChildren) => (
  <div className={style.container}>{children}</div>
);
