import React from 'react';
import { FormContact, Title, Paragraph } from '../../components';
import './contact.scss';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';

const WraperImage = styled('a')`
  width: 100px;
  background: #018383;
  padding: 13px;
  border-radius: 5px;
  span {
    color: #fff !important;
    margin-left: 10px;
  }
  img {
    height: '51px !important';
    width: '217px !important';
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={'Have a question?'}
        description={
          'You can email us and ask how you can participate in this big community, we are people from different countries trying to keep Hong Kong neat from the waste.'
        }
      />
      <div className="contact__container">
        <div className="row">
          <div className="col-md-6 col-12">
            <Title text={t('contact.title_contact')} variable={'contact_title'} />
            <Paragraph tag="p" variable="contact__paragraph" text={t('contact.phrase')} />
            <FormContact />
          </div>
          <div className="col-md-6 col-12">
            <Title variable={'contact_buy-title'} text={t('contact.title_coffee')} />
            <Paragraph tag="p" text={t('contact.buyacoffee')} />
            <WraperImage href="https://www.buymeacoffee.com/nomorewaste" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy Me A Coffee"
              />
              <span>Buy my a Coffee</span>
            </WraperImage>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
