import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { MapGoogleApi, Spinner } from '../../../../components';
import { LOCATIONS_QUERY } from '../../../../services/apollo/queries';
import { getLocations } from '../../../../services/redux/actions/search.actions';
import './MapContianer.scss';
import { getDistances } from '../../../../utils/getDistance';

const MapContainer = ({ search, onGetLocations, coords }) => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY, { variables: search });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;

  const sortDataBydistance = data.getLocations
    .map((location) => {
      const dist = getDistances(coords.lat, coords.lng, location.lat, location.lng, 'K');
      return {
        ...location,
        dist: _.round(dist, 2),
      };
    })
    .sort(function (a, b) {
      return a.dist - b.dist;
    });
  onGetLocations(sortDataBydistance);

  return <div className="map">{data && <MapGoogleApi data={sortDataBydistance} />}</div>;
};

const mapStateToProps = (state) => {
  return {
    search: state.searchs.search,
    coords: state.settings.coords,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetLocations: (params) => dispatch(getLocations(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
