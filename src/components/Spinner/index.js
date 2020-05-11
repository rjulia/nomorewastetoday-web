import React from 'react';
import './Spinner.scss';

const Spinner = ({ className }) => {
  return (
    <div className={`spinner__container ${className}`}>
      <div className="spinner__ring"></div>
    </div>
  );
};

export default Spinner;
