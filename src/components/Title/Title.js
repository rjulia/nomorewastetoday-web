import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Title.scss'

const Title = ({ tag, text, classN, color, size, sizeM, onClick }) => {

  const TagName = tag || 'h1'

  const WrapperTitle = styled(TagName)`
    color: ${props => props.color};
    font-size: ${props => props.sizeM}px;
    line-height: ${props => 4 + props.sizeM}px;
    margin: 1rem 0;
    @media (min-width: 768px) {
      font-size: ${props => props.size}px;
      line-height: ${props => 4 + props.size}px;
  }

`;

  return (
    <WrapperTitle
      className={classN}
      color={color}
      size={size}
      sizeM={sizeM}
      onClick={onClick}>
      {text}
    </WrapperTitle>
  )
}

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classN: PropTypes.string
};

export default Title
