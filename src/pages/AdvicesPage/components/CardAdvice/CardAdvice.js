import React from 'react';
import { Link } from 'react-router-dom';
import { Title, BoxImage } from '../../../../components';
import { withTranslation } from 'react-i18next';
import './CardAdvice.scss';

const CardAdvice = ({ data, i18n }) => {
  const { language } = i18n;
  return (
    <Link to={`/advices/${data.id}`}>
      <div className="card-advice__container">
        <div className="card-advice__header">
          <Title
            tag={'h2'}
            text={language === 'en' ? data.title__en || data.title : data.title__zh || data.title}
          />
        </div>
        <div className="card-advice__content">
          <div className="card-advice__box--image">
            <BoxImage img={data.imageUrlWhat || data.imageUrl} height={200} />
            <p className="card-advice__author"> Author: {data.authorWhat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withTranslation()(CardAdvice);
