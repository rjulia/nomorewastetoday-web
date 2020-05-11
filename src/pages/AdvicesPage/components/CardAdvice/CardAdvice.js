import React from 'react';
import { Link } from 'react-router-dom';
import { Title, BoxImage } from '../../../../components';
import { withTranslation } from 'react-i18next';
import './CardAdvice.scss';

const CardAdvice = ({ advice, i18n }) => {
  const { language } = i18n;
  return (
    <Link to={`/advices/${advice.id}`}>
      <div className="card-advice__container">
        <div className="card-advice__header">
          <Title tag={'h2'} text={language === 'en' ? advice.title__en : advice.title__zh} />
        </div>
        <div className="card-advice__content">
          <div className="card-advice__box--image">
            <BoxImage img={advice.imageUrlWhat} height={200} />
            <p className="card-advice__author"> Author: {advice.authorWhat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withTranslation()(CardAdvice);
