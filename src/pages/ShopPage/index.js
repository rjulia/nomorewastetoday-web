import React, { useState } from 'react';
import './shops.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from '../../components';
import { SHOPS_QUERY } from '../../services/apollo/queries';
import { CardShop, CardDetailShop } from './components/';
import { useTranslation } from 'react-i18next';
import variables from '../../scss/variables.scss';
import SEO from '../../components/SEO';

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closed, setClosed] = useState('');
  const [ID, setId] = useState('');

  const onOpen = (id) => {
    if (id === ID || ID === '') {
      setClosed('closed');
      setIsOpen(!isOpen);
    }
    setId(id);
  };

  const onClose = () => {
    setIsOpen(false);
    setClosed('');
    setId('');
  };
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(SHOPS_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;

  return (
    <>
      <SEO
        title={'List of the shops eco-friendly '}
        description={
          'We want to provide to you a list of the best places in Hong kong to find no-plastic tools for your daily use, organic food and people who help to better conserve the environment.'
        }
      />
      <div className="shop__container">
        <div className="shop__title">
          <Title tag={'h1'} text={t('shops.title')} size={48} color={variables.primary} />
          <Paragraph tag="p" variable="contact__paragraph" text={t('shops.paraf')} />
        </div>
        <div className="row">
          <div className={!isOpen ? `row shop__row ${closed}` : 'row shop__row open'}>
            {data.getShops.map((shop) => (
              <div key={shop.id} className="column">
                <CardShop shop={shop} isOpen={isOpen} open={(id) => onOpen(id)} />
              </div>
            ))}
          </div>
          <div className={!isOpen ? `aside ${closed}` : 'aside open'}>
            {ID && <CardDetailShop id={ID} onClose={() => onClose()} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
