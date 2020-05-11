import {
  SETTINGS_GET_LANGUAGE,
  SETTINGS_SET_LANGUAGE,
  SETTINGS_GET_POSITION,
  SETTINGS_TOGGLE_MENU,
  SETTINGS_CLEAN_POSITION,
} from './types';

export function getLanguage() {
  return {
    type: SETTINGS_GET_LANGUAGE,
  };
}

export function setLanguage(language) {
  return {
    payload: {
      language,
    },
    type: SETTINGS_SET_LANGUAGE,
  };
}

export function getPosition(coords) {
  return {
    payload: {
      coords,
    },
    type: SETTINGS_GET_POSITION,
  };
}

export function toggleMenu() {
  return {
    type: SETTINGS_TOGGLE_MENU,
  };
}

export function cleanPosition() {
  return {
    type: SETTINGS_CLEAN_POSITION,
  };
}
