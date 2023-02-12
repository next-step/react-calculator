import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.css";

function StatusPane({ children }) {
  return <h1 id={style.total}>{children}</h1>;
}

StatusPane.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatusPane;
