import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from '../../../../components';
import { LOCATION_QUERY } from '../../../../services/apollo/queries';
import './locationDetail.scss';
import { getImage } from '../../../../utils/getImageWhenNoImage';
import { FaCheck } from 'react-icons/fa';

const LocationDetail = ({ id }) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  const location = data.getLocation;
  const img = location.imageUrl || getImage(location.category);
  return (
    <div className="location-detail">
      <div className="location-detail__image">
        <div className="location-detail__boximage">
          <img src={img.img || img} alt={location.name} />
        </div>
      </div>
      {img.author && (
        <a
          className="location-detail__author"
          href={img.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {img.author}
        </a>
      )}
      <div className="location-detail__boxtext">
        <Paragraph
          variable={`${location.category} location-detail__location`}
          text={location.category}
        />
        <Title tag="h2" text={location.name} />
        <Paragraph variable="location-detail__description" text={location.content__en} />
        <Paragraph variable="location-detail__address" text={location.address} />
        <Paragraph
          tag="a"
          variable="location-detail__link-web"
          href={location.webUrl || location.facebook}
          text={location.webUrl || location.facebook}
        />
        <Title
          tag="h3"
          variable={`${location.category} location-detail__subtitle`}
          text="What we recycle"
        />
        <ul className="location-detail__list">
          {location.recycleBy.map((type) => (
            <li key={type} className={`${location.category} location-detail__item`}>
              <FaCheck size="12px" />
              <Paragraph tag="span" text={type} />
            </li>
          ))}
        </ul>
        <Title
          tag="h3"
          variable={`${location.category} location-detail__subtitle `}
          text="Contant Details"
        />
        <Paragraph variable="location-detail__contact-name" text={location.conact_name} />
        <Paragraph variable="location-detail__tel" text={location.tel} />
        <Paragraph variable="location-detail__email" text={location.email} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.searchs.id,
  };
};

export default connect(mapStateToProps)(LocationDetail);
