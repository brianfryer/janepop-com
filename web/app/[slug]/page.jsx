import React from 'react';
import { notFound } from 'next/navigation';
import formatMetadata from '~/utils/formatMetadata';
import formatOpenGraph from '~/utils/formatOpenGraph';
import fetchSupplementalPage from '~/app/supplemental-pages/supplemental-page/utils/fetchSupplementalPage';
import SupplementalPage from '~/app/supplemental-pages/supplemental-page/supplemental-page';

export const runtime = 'edge';

export const generateMetadata = async (props) => {
  const { params } = props;
  const { slug } = params;

  const data = await fetchSupplementalPage({ slug });
  const { description, ogImage, title } = data?.attributes.seo || {};
  const openGraph = formatOpenGraph({
    description,
    ogImage,
    slug,
    title,
  });

  return formatMetadata({ description, openGraph, title });
};

const Page = async (props) => {
  const { params } = props;
  const { slug } = params;

  const initialData = await fetchSupplementalPage({ slug });
  if (!initialData) return notFound();

  return (
    <SupplementalPage
      initialData={initialData}
      slug={slug}
    />
  );
};

export default Page;
