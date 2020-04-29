import i18n from 'react-native-i18n';

const en = require('./locales/en.json');
const id = require('./locales/id.json');

i18n.fallbacks = true;
i18n.translations = {
  en,
  id
};

export default i18n;
