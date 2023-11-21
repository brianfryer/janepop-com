/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import fetchCms from '~/utils/fetchCms';

export const runtime = 'edge';

const revalidation = {
  getTag: () => 'home-page',
  models: ['home-page'],
};

const GET = async () => {
  const cmsParams = {
    populate: {
      about: { populate: '*' },
      contact: { populate: '*' },
      hero: { populate: '*' },
      how: { populate: '*' },
      seo: { populate: '*' },
      welcome: { populate: '*' },
      why: { populate: '*' },
    },
  };
  const tag = revalidation.getTag();
  const data = await fetchCms('home-page', cmsParams, [tag]);
  return NextResponse.json(data);
};

export { GET, revalidation };
