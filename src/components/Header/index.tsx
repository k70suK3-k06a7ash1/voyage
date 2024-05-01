import { Gear } from "@phosphor-icons/react";
import { Button } from "../Button";
import style from "./index.module.css";
import { logoutAction } from "@/actions/logout";

export const Header = () => (
  <form className={style.container} action={logoutAction}>
    <Button>
      <Gear size={26} />
    </Button>
  </form>
);
