import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import languageEN from './assets/languages/en.json';
import languageCN from './assets/languages/cn.json';

// the translations
const resources = {
  en: {
    translation: languageEN
  },
  cn: {
    translation: languageCN
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
