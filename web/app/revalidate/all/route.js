/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import baseUrl from '~/utils/baseUrl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const GET = async () => {
  const url = new URL('/revalidate?tag=cms', baseUrl);
  const endpoint = url.toString();
  const response = await fetch(endpoint);
  const data = await response.json();
  return NextResponse.json(data);
};

export { GET };
