/* eslint-disable react/button-has-type */
import React from 'react';
import './cutom-button.styles.scss';

export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
