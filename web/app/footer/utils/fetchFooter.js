import baseUrl from '~/utils/baseUrl';
import formatErrorMessage from '~/utils/formatErrorMessage';
import { revalidation } from '../route';

const fetchFooter = async () => {
  try {
    const url = new URL('/footer', baseUrl);
    const endpoint = url.toString();
    const tag = revalidation.getTag();
    const response = await fetch(endpoint, {
      next: { tags: [tag, 'cms'] },
    });

    if (!response || !response.ok) {
      const message = formatErrorMessage(response.statusText, endpoint);
      const error = new Error(message);
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchFooter;
