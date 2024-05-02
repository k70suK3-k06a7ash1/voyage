import { At } from "@phosphor-icons/react";
import style from "./index.module.css";
import { Input } from "../Input";
export const EmailInput = () => (
  <div className={style.container}>
    <label htmlFor="email" className={style.icon}>
      <At size={24} color={"var(--neutral-200)"} />
    </label>
    <Input
      className={style.input}
      id="email"
      type="email"
      name="email"
      placeholder="Enter your email"
    />
  </div>
);
