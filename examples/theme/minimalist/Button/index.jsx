import React from 'react';

import './styles.scss';

const Button = ({ type = 'submit', disabled = false, loading = false, children }) => {
  return (
    <button type={type} disabled={disabled || loading} className="minimalist-button">
      {children}
    </button>
  );
};

export default Button;
