import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import cn from './locales/cn.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    cn: { translation: cn },
    es: { translation: es },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
