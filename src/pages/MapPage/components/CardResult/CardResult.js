import React from 'react';
import { connect } from 'react-redux';
import { Title, Paragraph } from '../../../../components';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { getLocation } from '../../../../services/redux/actions/search.actions';
import { getPosition } from '../../../../services/redux/actions/settings.actions';
import './CardResult.scss';

const CardResult = ({ item, getIdLocation, onGetLocation }) => {
  const { address, name, district, tel, opening } = item;
  return (
    <div className={`card-result`}>
      <Title
        tag="h3"
        text={name}
        size={16}
        sizeM={16}
        classN="card-result__title"
        onClick={() => {
          getIdLocation(item.id);
          onGetLocation({
            lat: item.lat,
            lng: item.lng,
            zoom: 15,
          });
        }}
      />{' '}
      <span className="card-result__district">
        {' '}
        - <span>{district}</span>
      </span>
      <Paragraph text={address} tag="p" classN="card-result__parf" />
      {item.dist && (
        <span className="card-result__distance">
          <FaMapMarkerAlt size="10" /> {item.dist}
        </span>
      )}
      {tel && (
        <span className="card-result__distance">
          <FaPhoneAlt size="10" /> {tel}
        </span>
      )}
      {opening && (
        <span className="card-result__distance">
          <FaRegClock size="10" /> {opening}
        </span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  coords: state.settings.coords,
});

const mapDispatchToProps = (dispatch) => ({
  getIdLocation: (id) => dispatch(getLocation(id)),
  onGetLocation: (params) => dispatch(getPosition(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardResult);
