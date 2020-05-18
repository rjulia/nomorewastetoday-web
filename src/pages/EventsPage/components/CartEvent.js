import React from 'react';
import { Link } from 'react-router-dom';
import { Title, BoxImage } from '../../../components';
import { withTranslation } from 'react-i18next';
import './CartEvent.scss';
import { Calendar } from '../../../assets/icons';
import moment from 'moment';

const CardEvent = ({ data, i18n }) => {
  const { language } = i18n;
  console.log(data.category);
  return (
    <Link to={`/events/${data.id}`}>
      <div className="card-event__container">
        <div className="card-event__header">
          <Title tag={'h2'} text={data.title} />
        </div>
        <div className="cart-event__details">
          <p>
            Type:{' '}
            {data.category.map((cat) => (
              <span>{cat}</span>
            ))}
          </p>
          <p>
            <Calendar width="14px" style={{ transform: 'scale(0.3)' }} />:{' '}
            {moment(data.date).format('DD/MM/YYYY')}
          </p>
        </div>
        <div className="card-event__content">
          <div className="card-event__box--image">
            <BoxImage img={data.imageUrlWhat || data.imageUrl} height={200} />
            <p className="card-event__author"> Author: {data.authorWhat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withTranslation()(CardEvent);
