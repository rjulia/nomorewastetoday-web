import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import styles from '../../scss/styles.scss';
import { toggleMenu } from '../../services/redux/actions/settings.actions';

const WrapperButtonBurger = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: ${styles.white};
  cursor: pointer;
  span {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

const ButtonBurger = ({ isOpen, onToggleMenu }) => {
  const handelToggleMenu = () => {
    onToggleMenu();
  };
  return (
    <WrapperButtonBurger onClick={handelToggleMenu}>
      {isOpen ? <FiX size="44px" /> : <FiMenu size="44px" />}
    </WrapperButtonBurger>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.settings.isOpenMenu,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(toggleMenu()),
});

ButtonBurger.propTypes = {
  isOpen: PropTypes.bool,
  onToggleMenu: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBurger);
