import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './translations/zh.json';
import en from './translations/en.json';

const resources = {
  en: {
    translations: en,
  },
  zh: {
    translations: zh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // we init with resources
    resources: resources,
    lng: 'zh',
    keySeparator: '.',
    fallbackLng: ['en', 'zh'],
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
