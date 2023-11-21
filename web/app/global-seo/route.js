/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { set } from 'lodash';
import fetchCms from '~/utils/fetchCms';

export const runtime = 'edge';

const revalidation = {
  getTag: () => 'global-seo',
  models: ['global-seo'],
};

const GET = async () => {
  try {
    const cmsParams = set({}, 'populate.seo', { populate: '*' });
    const tag = revalidation.getTag();
    const data = await fetchCms('global-seo', cmsParams, [tag]);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message || 'Error', { status: error.status || 500 });
  }
};

export { GET, revalidation };
