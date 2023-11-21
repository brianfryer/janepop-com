import getLocaleCode from './getLocaleCode';

const localeCode = typeof navigator === 'undefined'
  ? process.env.NEXT_PUBLIC_DEFAULT_LOCALE
  : getLocaleCode(navigator.languages, navigator.language);

export default localeCode;
