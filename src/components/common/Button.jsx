import React from 'react';

const Button = ({ className, value, onClick, children }) => {
  return (
    <button className={className} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
