import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import { HongKongIcon, HomeIcon, EmailIcon, Shop, AdviceIcon } from '../../assets/icons';
import { ButtonMenu, ButtonBurger, ButtonLanguage } from '../../components';
import { useTranslation } from 'react-i18next';
import ImgLogo from '../../assets/images/logo.png';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu">
      <div className="button__logo mobile">
        <img src={ImgLogo} alt="no more waste logo" />
      </div>
      <NavLink to="/" className="menu__logo">
        <HongKongIcon />
      </NavLink>
      <div className="menu__buttons">
        <div className="button__logo desktop">
          <img src={ImgLogo} alt="no more waste logo" />
        </div>
        <NavLink to="/map">
          <ButtonMenu text={t('menu.home')}>
            <HomeIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink to="/shops">
          <ButtonMenu text={t('menu.shops')}>
            <Shop width="60px" style={{ transform: 'scale(0.7)' }} />
          </ButtonMenu>
        </NavLink>
        <NavLink to="/advices">
          <ButtonMenu text={t('menu.advice')} variable={'bulb'}>
            <AdviceIcon width="60px" style={{ transform: 'scale(0.7)' }} />
          </ButtonMenu>
        </NavLink>
        <NavLink to="/contact">
          <ButtonMenu text={t('menu.contact')}>
            <EmailIcon width="60px" />
          </ButtonMenu>
        </NavLink>
      </div>
      <ButtonLanguage />
      <div className="menu__burger">
        <ButtonBurger />
      </div>
    </div>
  );
};

export default Menu;
