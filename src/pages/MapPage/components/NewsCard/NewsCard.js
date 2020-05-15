import React from 'react';
import { connect } from 'react-redux';
import { Title, Paragraph } from '../../../../components';
import Waste from '../../../../assets/images/beach-plastic.webp';
import './NewsCard.scss';
import moment from 'moment';
import isMobile from '../../../../utils/isMobile';
import { getEvent } from '../../../../services/redux/actions/search.actions';

const NewsCard = ({ item, onGetEvent }) => {
  const {
    title,
    date,
    description,
    urlToImage,
    imageUrl,
    content__zh,
    content__en,
    url,
    id,
  } = item;
  const TitleComponent = () =>
    item.__typename === 'Event' ? (
      <div onClick={() => onGetEvent(id)}>
        <Title tag="h3" text={title} variable="news-card__title" />
      </div>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Title tag="h3" text={title} variable="news-card__title" />
      </a>
    );
  return (
    <div className="newscard">
      <div className="news-card__image">
        <div className="news-card__frame">
          <img src={urlToImage ? urlToImage : imageUrl ? imageUrl : Waste} alt={title} />
        </div>
      </div>
      <div className="news-card__content">
        {date ? (
          <Paragraph tag="span" text={moment(date).format('MM/DD/YY')} variable="news-card__date" />
        ) : (
          ''
        )}
        <TitleComponent />
        <Paragraph
          tag="p"
          isTrucate={true}
          characters={isMobile() ? 80 : 100}
          text={description || content__zh || content__en}
          variable="news-card__text"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onGetEvent: (id) => dispatch(getEvent(id)),
});

export default connect(undefined, mapDispatchToProps)(NewsCard);
