import React from 'react';
import styled from 'styled-components';
import styles from '../../scss/styles.scss';
import { FaAngleRight } from 'react-icons/fa';
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
  width: auto;
  min-width: 110px;
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
      <span>{text}</span>
      <FaAngleRight color={handleColorType(category)} />
    </WrapperButtonBack>
  );
};

ButtonBack.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  category: PropTypes.string,
};

export default ButtonBack;
