import documentFontSize from './documentFontSize';

const remToPx = (n) => {
  const rem = parseFloat(n);
  const px = parseFloat(rem * documentFontSize, 10);

  return px;
};

export default remToPx;
