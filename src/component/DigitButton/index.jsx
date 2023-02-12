import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function DigitButton({ value, onClick }) {
  return (
    <button className={styles.digit} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

DigitButton.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DigitButton;
