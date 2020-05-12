import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, AsideContainer } from './containers';
import { Modal } from '../../components';

const MapRecycle = ({ coords }) => {
  return (
    <>
      {coords.lng !== 0 ? <MapContainer /> : ''}
      <AsideContainer />
      <Modal />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    coords: state.settings.coords,
  };
};

export default connect(mapStateToProps)(MapRecycle);
