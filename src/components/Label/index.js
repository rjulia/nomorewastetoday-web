import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperLabel = styled.div`
    padding: 6px 8px;
    font-size: 10px;
    margin-right: 10px;
    font-weight: 400;
    line-height: 1;
    border-radius: 30px;
    color: ${(props) => props.color}
    background-color: ${(props) => props.bgc}
    display: inline-flex;
`;

const Label = ({ color, text, bgc }) => {
  return (
    <WrapperLabel bgc={bgc} color={color}>
      {text}
    </WrapperLabel>
  );
};

Label.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  bgc: PropTypes.string,
};

export default Label;
