import slugify from 'slugify';

slugify.extend({ '|': undefined });

const formatSlug = (string) => slugify(string, { lower: true, strict: true });

export default formatSlug;
