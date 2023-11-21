import formatMetadata from '~/utils/formatMetadata';
import formatOpenGraph from '~/utils/formatOpenGraph';
import fetchGlobalSeo from '~/app/global-seo/utils/fetchGlobalSeo';
import fetchHomePage from './home-page/utils/fetchHomePage';
import HomePage from './home-page/home-page';

export const runtime = 'edge';

export const generateMetadata = async () => {
  const pageData = await fetchHomePage();
  const data = pageData || await fetchGlobalSeo();
  const title = data?.seo?.title ?? 'Home';
  const description = data?.seo?.description;
  const ogImage = data?.seo?.ogImage;
  const openGraph = formatOpenGraph({
    description,
    ogImage,
    slug: '/',
    title,
  });

  return formatMetadata({ description, openGraph, title });
};

const Page = async () => {
  const initialData = await fetchHomePage();
  return <HomePage initialData={initialData} />;
};

export default Page;
