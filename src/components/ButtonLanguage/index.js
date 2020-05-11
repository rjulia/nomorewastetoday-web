import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from "../../scss/styles.scss";
import { withTranslation } from 'react-i18next';

const WrapperButtonLanguage = styled('div')`
  display: flex;
  flex: 0 0 50px;
  justify-content: flex-end;
  align-items: center;
  width:50%;
  height: 100%;
  color: ${styles.white};
  cursor: pointer;
  @media (min-width: 768px) {
    width:100%;
    justify-content: center;
    height: 150px;
    padding-bottom: 20px;

  }
  span {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300;
  }
`

const ButtonLanguage = ({ i18n }) => {

  const [language, setLanguage] = useState(i18n.language)
  const changeLanguage = () => {
    if (language === "en") {
      i18n.changeLanguage('zh');
      setLanguage('zh')
    } else {
      i18n.changeLanguage('en');
      setLanguage('en')

    }
  };


  return (
    <WrapperButtonLanguage onClick={() => changeLanguage()}>
      <span >{language === "en" ? "繁" : "en"}</span>
    </WrapperButtonLanguage>
  )
}

ButtonLanguage.propTypes = {
  i18n: PropTypes.object
};


export default withTranslation()(ButtonLanguage);

