import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import './CardDetailShop.scss';
import {
  Spinner,
  BoxImage,
  Title,
  Label,
  Paragraph,
  Map,
  ButtonBack,
} from '../../../../components';
import { SHOP_QUERY } from '../../../../services/apollo/queries';
import variables from '../../../../scss/variables.scss';
import { useTranslation } from 'react-i18next';
import {
  FaRegEnvelope,
  FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobileAlt,
} from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

const CardDetailShop = ({ id, onClose }) => {
  const leafs = [0, 1, 2, 3, 4];
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(SHOP_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
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
      default:
        break;
    }
  }
  const {
    address,
    category,
    description,
    email,
    facebook,
    imageUrl,
    name,
    plasticfree,
    webUrl,
    instagram,
    phone,
    lat,
    lng,
  } = data.getShop;
  const location = [
    {
      id: id,
      lat: lat,
      lng: lng,
      zoom: 19,
    },
  ];
  const coordsShop = {
    lat: lat,
    lng: lng,
    zoom: 16,
  };

  return (
    <div className="card-detail-shop__container">
      <ButtonBack onClick={onClose} text={t('btns.goback')} />
      <div onClick={onClose}>
        <BoxImage img={imageUrl} height={300} />
      </div>
      <div className="card-detail-shop__label">
        {category.map((catg) => (
          <Label
            key={catg}
            color={variables.white}
            bgc={variables.primary}
            text={translationCatagoery(catg)}
          />
        ))}
      </div>
      <Title tag={'h2'} text={name} color={variables.primary} size={30} />
      <div>
        <Paragraph text={t('shops.qualification')} classN={'card-shop__qualification'} />
        <p className="card-shop__start">
          {leafs.map((leaf) => (
            <FaLeaf
              fill={plasticfree >= leaf + 1 ? variables.primary : variables.smoke}
              key={leaf}
              size={18}
            />
          ))}
        </p>
      </div>
      <Paragraph tag={'div'} text={description} size={16} />
      <Title tag={'h3'} text={''}></Title>
      <Paragraph size={14} text={address} tag={'p'} className="card-shop__address">
        <FaMapMarkerAlt size="10" />{' '}
      </Paragraph>
      {phone && (
        <p className="card-shop__phone">
          <FaMobileAlt size="10" /> {phone}
        </p>
      )}
      <div className="card-shop__box--links">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={20} />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        )}
        {webUrl && (
          <a href={webUrl} target="_blank" rel="noopener noreferrer">
            <IoIosGlobe size={20} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <FaRegEnvelope size={20} />
          </a>
        )}
      </div>
      {lng && lat ? (
        <>
          <Title text={'Map'} tag={'h3'} size={18} color={variables.primary} />
          <div className="card-shop__map">
            <Map data={location} coordsShop={coordsShop} />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default CardDetailShop;
