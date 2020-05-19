import React from 'react';
import { Title, BoxImage, Label, Button } from '../../../../components';
import './CardShop.scss';
import {
  FaRegEnvelope,
  FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobileAlt,
} from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import variables from '../../../../scss/variables.scss';

const CardShop = ({ shop, open, isOpen }) => {
  const leafs = [0, 1, 2, 3, 4];
  const { t } = useTranslation();

  function translationCatagoery(value) {
    switch (true) {
      case value === 'HOME':
        return t('shops.category.home');
      case value === 'HEALTHCARE':
        return t('shops.category.healthcare');
      case value === 'FOOD':
        return t('shops.category.food');
      case value === 'CATERING':
        return t('shops.category.catering');
      case value === 'CLOTHES':
        return t('shops.category.clothes');
      case value === 'SPORTS':
        return t('shops.category.sports');
      case value === 'OTHERS':
        return t('shops.category.others');
      case value === 'BABY':
        return t('shops.category.baby');
      case value === 'CLEANING':
        return t('shops.category.cleaning');
      case value === 'COSMETICS':
        return t('shops.category.cosmetics');
      default:
        break;
    }
  }

  return (
    <div className="card-shop__container">
      <div className="card-shop__header">
        <Title tag={'h2'} text={shop.name || ''} />
        <span>{!isOpen && <Button onClick={() => open(shop.id)} text={t('btns.viewmore')} />}</span>
      </div>
      <div className="card-shop__content">
        <div className="card-shop__box--image" onClick={() => open(shop.id)}>
          <BoxImage img={shop.imageUrl} height={180} />
        </div>
        <div className="card-shop__box--text">
          <div>
            <p className="card-shop__qualification">{t('shops.qualification')}</p>
            <p className="card-shop__start">
              {leafs.map((leaf) => (
                <FaLeaf
                  fill={shop.plasticfree >= leaf + 1 ? variables.primary : variables.smoke}
                  key={leaf}
                  size={18}
                />
              ))}
            </p>
          </div>
          <p className="card-shop__address">
            <FaMapMarkerAlt size="10" /> {shop.address}
          </p>
          {shop.phone && (
            <p className="card-shop__phone">
              <FaMobileAlt size="10" /> {shop.phone}
            </p>
          )}
          <div className="card-shop__box--links">
            {shop.facebook && (
              <a href={shop.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
            )}
            {shop.instagram && (
              <a href={shop.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            )}
            {shop.webUrl && (
              <a href={shop.webUrl} target="_blank" rel="noopener noreferrer">
                <IoIosGlobe size={20} />
              </a>
            )}
            {shop.email && (
              <a href={`mailto:${shop.email}`}>
                <FaRegEnvelope size={20} />
              </a>
            )}
          </div>
          <div>
            {shop.category.map((catg) => (
              <Label
                key={catg}
                color={variables.white}
                bgc={variables.primary}
                text={translationCatagoery(catg)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
