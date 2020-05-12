import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from '../../utils/functions';
import variables from '../../scss/variables.scss';
import styled from 'styled-components';

const Paragraph = ({ text, tag, variable, isTrucate, characters, href, size = 16, children }) => {
  let insertedText;
  const TagName = tag || 'p';

  const WrapperParagraph = styled(TagName)`
    color: ${variables.text_gray};
    font-size: ${size}px;
    margin: 1rem 0;
    font-family: ${variables.outstanding};
    font-weight: 300;
  `;

  if (isTrucate) {
    insertedText = truncate(text, characters);
  } else {
    insertedText = text;
  }
  function createMarkup() {
    return { __html: insertedText };
  }

  if (href) {
    return (
      <TagName className={variable} href={href} target="_blank" rel="noopener noreferrer">
        {insertedText}
      </TagName>
    );
  }
  if (children) {
    return (
      <WrapperParagraph className={variable}>
        {children} {text}
      </WrapperParagraph>
    );
  }
  return <WrapperParagraph className={variable} dangerouslySetInnerHTML={createMarkup()} />;
};

Paragraph.propTypes = {
  text: PropTypes.string,
  tag: PropTypes.string,
  variable: PropTypes.string,
  isTrucate: PropTypes.bool,
  characters: PropTypes.number,
  href: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.element,
};

export default Paragraph;
