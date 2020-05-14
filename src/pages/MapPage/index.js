import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, AsideContainer } from './containers';
import { Modal } from '../../components';
import GetCurrentPosition from '../../utils/GetCurrentPosition';
import SEO from '../../components/SEO';

const MapRecycle = ({ coords }) => {
  return (
    <>
      <SEO
        title={'Best tool to find the recycle points in hong kong and more'}
        description={
          'Website that aims to help citizens find the closest recycling points for their best use, in addition to providing the news, advice. Also from shops, businesses and companies specialized in environmental conservation'
        }
      />
      <GetCurrentPosition />
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
