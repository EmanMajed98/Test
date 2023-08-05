import React from 'react';

const Input = ({ type, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </div>
  );
};

export default Input;
