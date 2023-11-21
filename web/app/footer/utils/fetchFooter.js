import baseUrl from '~/utils/baseUrl';
import formatErrorMessage from '~/utils/formatErrorMessage';

const fetchFooter = async () => {
  try {
    const url = new URL('/footer', baseUrl);
    const endpoint = url.toString();
    const response = await fetch(endpoint);

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
