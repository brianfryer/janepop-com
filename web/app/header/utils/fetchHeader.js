import baseUrl from '~/utils/baseUrl';
import formatErrorMessage from '~/utils/formatErrorMessage';

const fetchHeader = async () => {
  try {
    const url = new URL('/header', baseUrl);
    const endpoint = url.toString();
    const response = await fetch(endpoint).catch((error) => {
      const message = formatErrorMessage(error, endpoint);
      throw new Error(message);
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

export default fetchHeader;
