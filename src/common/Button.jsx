import { Children } from "react";
import style from "./Button.module.css";

function Button({ onClick = null, children, inactive }) {
  return (
    <button
      className={`${style.button} ${inactive ? style.buttonSecondary : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
