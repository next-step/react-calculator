import React from "react";
import style from "./index.module.css";

function StatusPane({ children }) {
  return <h1 id={style.total}>{children}</h1>;
}

export default StatusPane;
