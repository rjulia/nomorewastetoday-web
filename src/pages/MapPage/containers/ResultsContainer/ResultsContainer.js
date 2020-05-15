import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { cleanFilter, cleanLocations } from '../../../../services/redux/actions/search.actions';
import { SearchResults } from '../../components';
import { ButtonBack } from '../../../../components';
import { useTranslation } from 'react-i18next';

const ResultsContainer = ({ onCleanLocationFiltered, onCleanLocations, locations, category }) => {
  const { t } = useTranslation();
  const [classCategory, setClassCategory] = useState('');
  const handelCloseFiltered = () => {
    onCleanLocationFiltered();
    onCleanLocations();
  };
  function getCLassBycateory(category) {
    switch (true) {
      case category === 'COMMUNITY':
        return 'community';
      case category === 'WASTE_SEPARATION':
        return 'waste';
      case category === 'ORGANIZATIONS':
        return 'organization';
      case category === 'CLOTHES':
        return 'clothes';
      default:
        return 'private';
    }
  }
  useEffect(() => {
    setClassCategory(getCLassBycateory(category));
  }, [category]);

  return (
    <div>
      <ButtonBack category={classCategory} text={t('btns.goback')} onClick={handelCloseFiltered} />
      <SearchResults locations={locations} classCategory={classCategory} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    locations: state.searchs.locations,
    category: state.searchs.search.category,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCleanLocationFiltered: (params) => dispatch(cleanFilter(params)),
  onCleanLocations: () => dispatch(cleanLocations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
