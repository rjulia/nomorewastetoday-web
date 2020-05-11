import React, { useState, useEffect } from 'react';
import { Title, Spinner } from '../../../../components';
import NewsCard from '../NewsCard/NewsCard';
import './NewsAside.scss';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { EVENTS_QUERY, NEWS_QUERY } from '../../../../services/apollo/queries';

const WrapperNews = ({ news }) => {
  return news.length === 0 ? (
    <Spinner />
  ) : (
    news.map((news, id) => <NewsCard key={id} item={news} />)
  );
};

const NewsAside = ({ getEvents, getNewsInfo, t }) => {
  let results = [];
  let filterResults = [];
  const [state, setState] = useState([]);
  const [asFilter, setAsFilter] = useState('');
  if (getEvents.getEvents && getNewsInfo.getNewsInfo) {
    filterResults = results = getEvents.getEvents.concat(getNewsInfo.getNewsInfo);
  }

  useEffect(() => {
    setState(results);
  }, [getEvents.getEvents, getNewsInfo.getNewsInfo]);

  const handleFilterNews = (filter) => {
    if (filter === 'EVENTS') {
      filterResults = results.filter((item) => item.__typename === 'Event');
      setState(filterResults);
      setAsFilter('EVENTS');
    } else if (filter === 'NEWS') {
      filterResults = results.filter((item) => item.__typename === 'News');
      setState(filterResults);
      setAsFilter('NEWS');
    } else {
      setState(results);
      setAsFilter('');
    }
  };

  console.log(results, filterResults);

  return (
    <div className="news">
      <div className="news__header">
        <Title tag="h2" text={t('home.events.title')} />
        <div className="news__filter">
          <span className={asFilter === '' ? 'active' : ''} onClick={() => handleFilterNews()}>
            {t('home.events.all')}
          </span>
          <span
            className={asFilter === 'NEWS' ? 'active' : ''}
            onClick={() => handleFilterNews('NEWS')}
          >
            {t('home.events.news')}
          </span>
          <span
            className={asFilter === 'EVENTS' ? 'active' : ''}
            onClick={() => handleFilterNews('EVENTS')}
          >
            {t('home.events.events')}
          </span>
        </div>
      </div>
      <div className="news__body">
        <WrapperNews news={state} />
      </div>
    </div>
  );
};

export default compose(
  graphql(EVENTS_QUERY, {
    name: 'getEvents',
  }),
  graphql(NEWS_QUERY, {
    name: 'getNewsInfo',
  })
)(NewsAside);
