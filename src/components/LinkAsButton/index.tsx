import style from "./index.module.css";
import { Link, LinkProps } from "@tanstack/react-router";

export const LinkAsButton = (props: LinkProps) => (
  <Link {...{ activeProps: { className: style.caveIn }, ...props }}>
    {props.children}
  </Link>
);
