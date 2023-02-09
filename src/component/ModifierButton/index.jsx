import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

function ModifierButton({ modifier, onClick }) {
  return (
    <button className={styles.operation} onClick={() => onClick(modifier)}>
      {modifier}
    </button>
  );
}

ModifierButton.propTypes = {
  modifier: PropTypes.string.isRequired,
};

export default ModifierButton;
