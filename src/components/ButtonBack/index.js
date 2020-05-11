import React from 'react';
import styled from 'styled-components';
import styles from '../../scss/styles.scss';
import { FaAngleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const handleColorType = (category) => {
  switch (category) {
    case 'private':
      return styles.private;
    case 'waste':
      return styles.waste;
    case 'organization':
      return styles.organitation;
    case 'clothes':
      return styles.clothes;
    default:
      return styles.community;
  }
};

const WrapperButtonBack = styled('div')`
  display: flex;
  position: relative;
  width: 108px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ category }) => handleColorType(category)};
  border-radius: 20px;
  padding: 0 4px;
  cursor: pointer;
  margin: 20px 0;
  span {
    color: ${({ category }) => handleColorType(category)};
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    margin-left: 5px;
  }
`;

const ButtonBack = ({ text, onClick, category }) => {
  return (
    <WrapperButtonBack category={category} onClick={onClick}>
      <FaAngleLeft color={handleColorType(category)} /> <span>{text}</span>
    </WrapperButtonBack>
  );
};

ButtonBack.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonBack;
