import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Title } from '../../../../components';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import { Collection, Waste, Private, Clothes, Community } from '../../../../assets/icons';
import { cleanAndGetLocationFiltered } from '../../../../services/redux/actions/search.actions';
import './SelectCollectionPoints.scss';
import variables from '../../../../scss/variables.scss';

const SelectCollectionPoints = ({ onLoadLocationFiltered }) => {
  const { t } = useTranslation();
  const [slided, setSlided] = useState(false);
  const handleSlide = (state) => {
    setSlided(state);
  };

  const handleSearchLocation = (params) => {
    onLoadLocationFiltered({ category: params });
  };

  return (
    <div className="collection-points">
      <div className="collection-points--header">
        <Title tag="h2" text={t('home.recyclingPoints')} />
        <div className="collection-points--points">
          <span className={slided ? '' : 'active'} onClick={() => handleSlide(false)}></span>
          <span className={slided ? 'active' : ''} onClick={() => handleSlide(true)}></span>
        </div>
      </div>
      <div className="collection-points--body">
        <div className={slided ? 'collection-points--card slided' : 'collection-points--card '}>
          <Card onClick={() => handleSearchLocation('COMMUNITY')} text={t('home.community')}>
            <Community width="85" fill={variables.community} />
          </Card>
          <Card
            onClick={() => handleSearchLocation('ORGANIZATIONS')}
            text={t('home.organisations')}
          >
            <Collection width="85" fill={variables.organitation} />
          </Card>
          <Card onClick={() => handleSearchLocation('CLOTHES')} text={t('home.clothes')}>
            <Clothes width="85" fill={variables.clothes} />
          </Card>
          <Card onClick={() => handleSearchLocation('WASTE_SEPARATION')} text={t('home.bin')}>
            <Waste width="85" fill={variables.waste} />
          </Card>
          <Card onClick={() => handleSearchLocation('COLLECTOR')} text={t('home.private')}>
            <Private width="85" fill={variables.private} />
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoadLocationFiltered: (params) => dispatch(cleanAndGetLocationFiltered(params)),
});

export default connect(null, mapDispatchToProps)(SelectCollectionPoints);
