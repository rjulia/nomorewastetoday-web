import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useApolloClient } from '@apollo/react-hooks';
import { MapGoogleApi } from '../../../../components';
import { LOCATIONS_QUERY } from '../../../../services/apollo/queries';
import { setLocations } from '../../../../services/redux/actions/search.actions';
import './MapContianer.scss';
import { getDistances } from '../../../../utils/getDistance';

const MapContainer = ({ search, onGetLocations, coords }) => {
  //console.log(search);
  const [onLocations, setOnLocations] = useState([]);
  const client = useApolloClient();
  async function getLocations(search) {
    const { data } = await client.query({
      query: LOCATIONS_QUERY,
      variables: search,
    });
    setOnLocations(data.getLocations);
  }

  function filterLocations(locations) {
    return locations
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
  }
  onGetLocations(filterLocations(onLocations));

  useEffect(() => {
    if (!_.isEmpty(search)) {
      getLocations(search);
    }
    return () => {
      setOnLocations([]);
    };
  }, [search]);
  return <div className="map">{<MapGoogleApi />}</div>;
};

const mapStateToProps = (state) => {
  return {
    search: state.searchs.search,
    coords: state.settings.coords,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetLocations: (params) => dispatch(setLocations(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
