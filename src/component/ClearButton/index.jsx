import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function ClearButton({ onClick }) {
  return (
    <button className={styles.modifier} onClick={onClick}>
      AC
    </button>
  );
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton;
