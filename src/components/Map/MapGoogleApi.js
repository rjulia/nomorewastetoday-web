import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoogleMap, useLoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';
import { Spinner } from '../index';
import PointOrganizations from '../../assets/icons/ic_poi_association.svg';
import PointClothes from '../../assets/icons/ic_poi_clothes.svg';
import PointWaste from '../../assets/icons/ic_poi_bin.svg';
import PointCommunity from '../../assets/icons/ic_poi_green_point.svg';
import PointCollectors from '../../assets/icons/ic_poi_private.svg';
import Pin from '../../assets/icons/pin.png';
import { getLocation } from '../../services/redux/actions/search.actions';
import { getPosition } from '../../services/redux/actions/settings.actions';

const MapContainer = ({ data, settings, getIdLocation, onGetLocation, coordsShop }) => {
  const { coords } = settings;
  let center = undefined;
  if (coordsShop) {
    center = { lat: coordsShop.lat, lng: coordsShop.lng, zoom: coordsShop.zoom };
  } else {
    center = { lat: coords.lat, lng: coords.lng, zoom: coords.zoom };
  }

  const apikey = process.env.REACT_APP_API_KEY_MAPS;

  //const apikey = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_KEY_MAPS : null;

  const PointImg = (category) => {
    switch (category) {
      case 'COMMUNITY':
        return PointCommunity;
      case 'COLLECTOR':
        return PointCollectors;
      case 'ORGANIZATIONS':
        return PointOrganizations;
      case 'CLOTHES':
        return PointClothes;
      default:
        return PointWaste;
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apikey,
    language: 'en',
  });

  const renderMap = () => {
    const onLoad = undefined;

    return (
      <GoogleMap
        id="main-map"
        options={{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
        }}
        onLoad={onLoad}
        mapContainerStyle={{
          height: 'auto',
          width: '100%',
        }}
        zoom={center.zoom}
        center={center}
      >
        <Marker position={center} icon={Pin} />
        <MarkerClusterer
          options={undefined}
          styles={[
            {
              url: '/images/ic_cluster_01.svg',
              height: 32,
              width: 32,
              fontFamily: 'Rubik',
              textColor: '#FFF',
            },
            {
              url: '/images/ic_cluster_02.svg',
              height: 38,
              width: 38,
              fontFamily: 'Rubik',
              textColor: '#FFF',
            },
            {
              url: '/images/ic_cluster_03.svg',
              height: 44,
              width: 44,
              fontFamily: 'Rubik',
              textColor: '#FFF',
            },
            {
              url: '/images/ic_cluster_04.svg',
              height: 50,
              width: 50,
              fontFamily: 'Rubik',
              textColor: '#FFF',
            },
            {
              url: '/images/black_dot.png',
              height: 50,
              width: 50,
              fontFamily: 'Rubik',
              textColor: '#FFF',
            },
          ]}
        >
          {(clusterer) =>
            data.map((location, i) => {
              return (
                <Marker
                  key={i}
                  icon={PointImg(location.category)}
                  position={location}
                  clusterer={clusterer}
                  onClick={() => {
                    getIdLocation(location.id);
                    onGetLocation({
                      lat: location.lat,
                      lng: location.lng,
                      zoom: 15,
                    });
                  }}
                />
              );
            })
          }
        </MarkerClusterer>
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? renderMap() : <Spinner />;
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  getIdLocation: (id) => dispatch(getLocation(id)),
  onGetLocation: (params) => dispatch(getPosition(params)),
});

MapContainer.propTypes = {
  data: PropTypes.array,
  settings: PropTypes.object,
  getIdLocation: PropTypes.func,
  onGetLocation: PropTypes.func,
  coordsShop: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
