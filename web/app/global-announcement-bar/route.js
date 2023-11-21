/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import fetchCms from '~/utils/fetchCms';

export const runtime = 'edge';

const revalidation = {
  getTag: () => 'global-announcement-bar',
  models: ['global-announcement-bar'],
};

const GET = async () => {
  try {
    const tag = revalidation.getTag();
    const data = await fetchCms('global-announcement-bar', { populate: '*' }, [tag]);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message || 'Error', { status: error.status || 500 });
  }
};

export { GET, revalidation };
