import React from 'react';
import './event.scss';
import { withTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph, BoxImage, ButtonBack } from '../../components';
import { EVENT_QUERY } from '../../services/apollo/queries';
import moment from 'moment';
import variables from '../../scss/variables.scss';
import SEO from '../../components/SEO';

const Eventpage = ({ i18n }) => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(EVENT_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data);
  const event = data.getEvent;
  const day = moment(event.date).format('DD');
  const year = moment(event.date).format('YYYY');
  const month = moment(event.date).format('MMMM');
  const { language } = i18n;

  return (
    <>
      <SEO
        title={language === 'en' ? event.title__en : event.title__zh}
        description={language === 'en' ? event.statement__en : event.statement__zh}
      />
      <div className="event__container">
        <div className="row">
          <div className="col-12 col-md-2 event__box--images">
            <div className="event__box--date">
              <div className="event__group--date">
                <div className="event__date--month">{month}</div>
                <div className="event__date--day">{day}</div>
                <div className="event__date--year">{year}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <Link to={'/events'}>
              <ButtonBack text={i18n.t('btns.goback')} />
            </Link>
            <Title color={variables.primary} tag={'h2'} text={event.title} size={40} sizeM={32} />
            <Title color={variables.primary} tag={'h2'} text={'Why do it?'} size={24} sizeM={30} />
            <div className="event_pictures">
              <div className="event__box--image">
                <BoxImage variable={'frame-image'} img={event.imageUrl} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(Eventpage);
