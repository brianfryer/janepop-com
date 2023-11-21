/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import fetchCms from '~/utils/fetchCms';

export const runtime = 'edge';

const revalidation = {
  getTag: (entry) => `supplemental-pages/${entry.slug}`,
  models: ['supplemental-page'],
};

const GET = async (request, context) => {
  const { params } = context;
  const { slug } = params;

  const cmsParams = {
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      components: {
        on: {
          'global.accordion': { populate: '*' },
          'global.embed-code': { populate: '*' },
          'global.prose': { populate: '*' },
        },
      },
      seo: { populate: '*' },
    },
  };

  const tag = revalidation.getTag({ slug });

  const [data = null] = await fetchCms('supplemental-pages', cmsParams, [tag]);

  return NextResponse.json(data);
};

export { GET, revalidation };
