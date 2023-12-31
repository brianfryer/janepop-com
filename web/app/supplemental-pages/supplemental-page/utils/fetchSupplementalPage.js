import baseUrl from '~/utils/baseUrl';
import formatErrorMessage from '~/utils/formatErrorMessage';

const fetchSupplementalPage = async (props) => {
  const { slug } = props;

  try {
    const url = new URL(`/supplemental-pages/${slug}`, baseUrl);
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

export default fetchSupplementalPage;
