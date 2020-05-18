import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Title } from '../../../../components';
import { CardResult, DropdownSearchResults } from '../index';
import { DistrictHK, TypeOfCollection } from '../../../../utils/constants';
import { cleanAndGetLocationFiltered } from '../../../../services/redux/actions/search.actions';
import { getPosition, cleanPosition } from '../../../../services/redux/actions/settings.actions';
import { useTranslation } from 'react-i18next';

import './SearchResults.scss';

const SearchResults = ({
  locations,
  onCleanPosition,
  onLoadLocationFiltered,
  searchs,
  onGetPosition,
  classCategory,
}) => {
  const [idxActived, setIdxActived] = useState(null);
  const { t } = useTranslation();
  const [district, setDistrict] = useState('home.search.district.all');
  const [type, setType] = useState('home.search.type.all');

  const handleSearchLocationByCategory = (params) => {
    if (params === 'ALL') {
      onLoadLocationFiltered({ category: null });
      setType('home.search.type.all');
    } else {
      onLoadLocationFiltered({ category: params.value });
      setType(params.key);
    }
  };

  const handleSearchLocationByDistric = (params) => {
    console.log(params);
    if (params.value === 'ALL') {
      onLoadLocationFiltered({ district: null });
      onCleanPosition();
      setDistrict('home.search.district.all');
    } else {
      onLoadLocationFiltered({ district: params.value });
      setDistrict(params.key);
      if (params.coords) {
        onGetPosition(params.coords);
      }
    }
  };

  const toggleList = (idx) => {
    if (idx === idxActived) {
      setIdxActived(null);
    } else {
      setIdxActived(idx);
    }
  };

  return (
    <div className={`search-results ${classCategory}`}>
      <Title tag="h2" text={t('home.search.title')} />
      <div className="search-results__filter--box">
        <DropdownSearchResults
          idx={0}
          title={t('home.search.type.label')}
          selectTitle={type}
          idxActived={idxActived}
          list={TypeOfCollection}
          toggleItem={(item) => handleSearchLocationByCategory(item)}
          toggleList={(idx) => toggleList(idx)}
        />
        <DropdownSearchResults
          idx={1}
          title={t('home.search.district.label')}
          selectTitle={district}
          list={DistrictHK}
          idxActived={idxActived}
          toggleItem={(item) => handleSearchLocationByDistric(item)}
          toggleList={(idx) => toggleList(idx)}
        />
      </div>
      <div className="search-result__results">
        {locations && locations.map((item) => <CardResult key={item.id} item={item} />)}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searchs: state.searchs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadLocationFiltered: (params) => dispatch(cleanAndGetLocationFiltered(params)),
  onGetPosition: (params) => dispatch(getPosition(params)),
  onCleanPosition: (params) => dispatch(cleanPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
