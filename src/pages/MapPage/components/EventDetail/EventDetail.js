import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from '../../../../components';
import { EVENT_QUERY } from '../../../../services/apollo/queries';
import './EventDetail.scss';
import envoiramnet from '../../../../assets/images/envoiramnet.jpg';
import { FaMapMarkerAlt, FaFacebookSquare } from 'react-icons/fa';

const EventDetail = ({ id }) => {
  const { data, loading, error } = useQuery(EVENT_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  const event = data.getEvent;
  const img = event.imageUrl || envoiramnet;
  return (
    <div className="event-detail">
      <div className="event-detail__image">
        <div className="event-detail__boximage">
          <img src={img} alt={event.name} />
        </div>
      </div>
      <div className="event-detail__boxtext">
        <div className="event-detail__boxcategory">
          {event.category.map((category) => (
            <Paragraph
              key={category}
              variable={`${category} event-detail__category`}
              text={category}
            />
          ))}
        </div>

        <Title tag="h2" text={event.title} />
        <Paragraph
          tag="p"
          text={moment(event.date).format('MM/DD/YYYY')}
          variable="event-detail__date"
        />
        <span className="event-detail__address">
          <FaMapMarkerAlt size="10" /> {event.place || ''}
        </span>
        <Paragraph variable="event-detail__description" text={event.content__en} />
        <Paragraph
          tag="a"
          variable="event-detail__link-web"
          href={event.webUrl || event.facebook}
          text={event.webUrl || event.facebook}
        />
        <Title
          tag="h3"
          variable={`${event.category} event-detail__subtitle `}
          text="Event Contact"
        />
        <Paragraph variable="event-detail__contact-name" text={event.conact_name} />
        <Paragraph variable="event-detail__tel" text={event.tel} />
        <Paragraph variable="event-detail__email" text={event.email} />
        <a
          href={event.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="event-detail__facebook"
        >
          <FaFacebookSquare size="20" />{' '}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.searchs.id_event,
  };
};

export default connect(mapStateToProps)(EventDetail);
