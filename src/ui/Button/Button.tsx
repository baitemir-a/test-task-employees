import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
type Props = {
  children: ReactNode;
  type:"submit" | "reset" | "button" | undefined,
  disabled:boolean,
  click?: () => void;
};

export default function Button({ children, type, disabled, click }: Props) {
  return (
    <button className={styles.Button} type={type} disabled={disabled} onClick={click}>
      {children}
    </button>
  );
}
