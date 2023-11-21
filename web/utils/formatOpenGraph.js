import { SITE_URL } from '~/constants';

const FORMATS = [
  'large',
  'medium',
  'small',
  'thumbnail',
];

const formatOpenGraph = (props) => {
  const {
    description,
    ogImage,
    slug,
    title,
  } = props;

  const url = new URL(slug, SITE_URL).toString();

  const format = ogImage?.data && FORMATS.find((f) => ogImage?.data?.attributes?.formats[f]);

  const images = !format ? [] : [{
    height: ogImage.data?.attributes.formats[format].height,
    url: ogImage.data?.attributes.formats[format].url,
    width: ogImage.data?.attributes.formats[format].width,
  }];

  const openGraph = {
    description,
    images,
    title,
    type: 'website',
    url,
  };

  return openGraph;
};

export default formatOpenGraph;
