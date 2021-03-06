import React from 'react';
import './events.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from '../../components';
import CartEvent from './components/CartEvent';
import { EVENTS_QUERY } from '../../services/apollo/queries';
import { useTranslation } from 'react-i18next';
import variables from '../../scss/variables.scss';
import SEO from '../../components/SEO';

const Events = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(EVENTS_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  return (
    <>
      <SEO
        title={'With a little gesture, you can do a lot for your planet and especially Hong Kong'}
        description={
          'You find several advice how to don’t waste plastic or another materials, follow a few step you can help more than you think'
        }
      />
      <div className="events__container">
        <div className="events__title">
          <Title tag={'h1'} text={t('event.title')} size={48} color={variables.primary} />
          <Paragraph tag="p" variable="contact__paragraph" text={t('event.paraf')} />
        </div>
        <div className="row">
          {data.getEvents.map((event) => (
            <div key={event.id} className="column col-12 col-md-4">
              <CartEvent data={event} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
