import React from 'react';
import { Title } from '../../../../components';
import './Card.scss';
const Card = ({ children, text, onClick }) => {
  return (
    <div className="card_green" onClick={onClick}>
      <div className="card__image">{children}</div>
      <Title tag="p" text={text} variable="card__text" />
    </div>
  );
};

export default Card;
