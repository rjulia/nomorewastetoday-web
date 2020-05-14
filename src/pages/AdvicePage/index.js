import React from 'react';
import './advice.scss';
import { withTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph, BoxImage, ButtonBack } from '../../components';
import { ADVICE_QUERY } from '../../services/apollo/queries';
import moment from 'moment';
import variables from '../../scss/variables.scss';
import ProductContainer from './containers/ProductContainer';
import SEO from '../../components/SEO';
const AdvicePage = ({ i18n }) => {
  let { id } = useParams();
  console.log(id);
  const { data, loading, error } = useQuery(ADVICE_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data);
  const advice = data.getAdvice;
  const day = moment(advice.date).format('DD');
  const year = moment(advice.date).format('YYYY');
  const month = moment(advice.date).format('MMMM');
  const { language } = i18n;

  return (
    <>
      <SEO
        title={language === 'en' ? advice.title__en : advice.title__zh}
        description={language === 'en' ? advice.statement__en : advice.statement__zh}
      />
      <div className="advice__container">
        <div className="row">
          <div className="col-12 col-md-2 advice__box--images">
            <div className="advice__box--date">
              <div className="advice__group--date">
                <div className="advice__date--month">{month}</div>
                <div className="advice__date--day">{day}</div>
                <div className="advice__date--year">{year}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <Link to={'/advices'}>
              <ButtonBack text={i18n.t('btns.goback')} />
            </Link>
            <Title
              color={variables.primary}
              tag={'h2'}
              text={language === 'en' ? advice.title__en : advice.title__zh}
              size={40}
              sizeM={32}
            />
            <Paragraph
              variable={'advice__statement'}
              text={language === 'en' ? advice.statement__en : advice.statement__zh}
            />
            <Paragraph
              variable={'advice__author'}
              text={`Author: ${advice.author}`}
              tag={'a'}
              href={advice.author}
            />
            <Title color={variables.primary} tag={'h2'} text={'Why do it?'} size={24} sizeM={30} />
            <div className="advice_pictures">
              <div className="advice__box--image">
                <BoxImage variable={'frame-image'} img={advice.imageUrlWhy} height={200} />
                <Paragraph
                  variable={'advice__image--author'}
                  text={`Autho: ${advice.authorWhy}`}
                  tag={'a'}
                  href={advice.linkWhy}
                />
              </div>
              <div className="advice__text">
                <Paragraph
                  variable={'advice__long-text'}
                  text={language === 'en' ? advice.contentWhy__en.html : advice.contentWhy__zh.html}
                />
              </div>
            </div>
            <Title
              color={variables.primary}
              tag={'h2'}
              text={'What is the benefit?'}
              size={24}
              sizeM={30}
            />
            <div className="advice_pictures">
              <div className="advice__box--image">
                <BoxImage variable={'frame-image yes'} img={advice.imageUrlWhat} height={200} />
                <Paragraph
                  variable={'advice__image--author'}
                  text={`Autho: ${advice.authorWhat}`}
                  tag={'a'}
                  href={advice.linkWhat}
                />
              </div>
              <div className="advice__text">
                <Paragraph
                  variable={'advice__long-text'}
                  text={
                    language === 'en' ? advice.contentWhat__en.html : advice.contentWhat__zh.html
                  }
                />
              </div>
            </div>
            <Title
              color={variables.primary}
              tag={'h2'}
              text={'How can I do it?'}
              size={24}
              sizeM={30}
            />
            <Paragraph
              variable={'advice__long-text'}
              text={language === 'en' ? advice.contentHow__en.html : advice.contentHow__zh.html}
            />
            <Title
              color={variables.primary}
              tag={'h4'}
              text={'You can find this product clik in the link'}
              size={18}
              sizeM={18}
            />
            <ProductContainer ids={advice.products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(AdvicePage);
