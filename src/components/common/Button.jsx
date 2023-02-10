import React from 'react';

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
