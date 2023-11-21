import qs from 'qs';
import formatErrorMessage from '~/utils/formatErrorMessage';

const fetchCms = async (id, params, tags) => {
  const stringifiedParams = params ? qs.stringify(params, {
    encodeValuesOnly: true,
  }) : null;

  try {
    const path = `/api/${id}${stringifiedParams ? `?${stringifiedParams}` : ''}`;
    const base = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337';
    const url = new URL(path, base);
    const endpoint = url.toString();
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { tags: [...tags, 'cms'] },
    }).catch((error) => {
      const message = formatErrorMessage(error, endpoint, null, params);
      throw new Error(message);
    });

    if (!response || !response.ok) {
      const message = formatErrorMessage(response.statusText, endpoint);
      const error = new Error(message);
      error.status = response.status;
      throw error;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchCms;
