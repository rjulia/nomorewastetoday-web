import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { HomeIcon, EmailIcon, Shop, AdviceIcon } from '../../assets/icons';
import { ButtonMenu } from '../../components';
import { toggleMenu } from '../../services/redux/actions/settings.actions';

import './MenuMobile.scss';

const MenuMobile = ({ isOpen, onToggleMenu }) => {
  const { t } = useTranslation();
  const IsMenuOpen = isOpen ? 'isOpen' : '';
  const handelToggleMenu = () => {
    onToggleMenu();
  };
  return (
    <div className={`${IsMenuOpen} menu-mobile`}>
      <div className="menu__buttons">
        <NavLink onClick={handelToggleMenu} to="/map">
          <ButtonMenu text={t('menu.home')}>
            <HomeIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink onClick={handelToggleMenu} to="/shops">
          <ButtonMenu text={t('menu.shops')}>
            <Shop width="60px" style={{ transform: 'scale(0.7)' }} />
          </ButtonMenu>
        </NavLink>
        <NavLink onClick={handelToggleMenu} to="/advices">
          <ButtonMenu text={t('menu.advice')}>
            <AdviceIcon width="60px" style={{ transform: 'scale(0.7)' }} />
          </ButtonMenu>
        </NavLink>
        <NavLink onClick={handelToggleMenu} to="/contact">
          <ButtonMenu text={t('menu.contact')}>
            <EmailIcon width="60px" />
          </ButtonMenu>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.settings.isOpenMenu,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile);
