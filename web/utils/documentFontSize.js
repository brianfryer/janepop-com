const defaultFontSize = 16;

const documentFontSize = typeof document !== 'undefined'
  ? parseFloat(getComputedStyle(document.documentElement).fontSize, 10)
  : defaultFontSize;

export default documentFontSize;
