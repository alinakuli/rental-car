import css from "./Container.module.css";
import type { PropsWithChildren } from "react";

export default function Container({ children }: Required<PropsWithChildren>) {
  return <div className={css.container}>{children}</div>;
}