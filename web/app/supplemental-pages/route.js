/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import fetchCms from '~/utils/fetchCms';

export const runtime = 'edge';

const revalidation = {
  getTag: () => 'supplemental-pages',
  models: ['supplemental-page'],
};

const GET = async () => {
  const tag = revalidation.getTag();
  const data = await fetchCms('supplemental-pages', { populate: '*' }, [tag]);
  return NextResponse.json(data);
};

export { GET, revalidation };
