const getLocaleCode = (languages, language) => {
  if (languages.length) return languages[0];
  if (language) return language;
  return process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en-US';
};

export default getLocaleCode;
