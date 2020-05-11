import React from 'react';
import './ButtonMenu.scss';
import { FaAngleRight } from 'react-icons/fa';
import classNames from 'classnames';

const Button = ({ children, onClick, text, classN }) => {
  var btnClass = classNames({
    ButtonMenu: true,
    [classN]: classN,
  });

  return (
    <div className={btnClass} onClick={onClick}>
      <div className="icon__contianer">
        {children} <FaAngleRight />
      </div>
      <p className="icon__text"> {text} </p>
    </div>
  );
};

export default Button;
