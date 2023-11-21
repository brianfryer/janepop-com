const FORMATS = [
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
];

const getImageFormat = (formats, smallest = false) => {
  if (!formats) return null;
  if (smallest) return FORMATS.reverse().find((f) => formats[f]);
  return FORMATS.find((f) => formats[f]);
};

export default getImageFormat;
