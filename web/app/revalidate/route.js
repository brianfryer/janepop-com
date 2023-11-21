/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import revalidation from './utils/revalidation';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const GET = async (request) => {
  const { searchParams } = new URL(request.nextUrl);

  const tag = searchParams.get('tag');

  if (!tag) return NextResponse.json({ message: 'Missing paramater: `tag`' }, { status: 400 });

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
};

const POST = async (request) => {
  const body = await request.json();

  const { entry, model } = body || {};
  if (!model) return NextResponse.json({ message: 'Missing data: `model`' }, { status: 400 });

  const getTags = revalidation[model];
  if (!getTags) return NextResponse.json({ message: `No path found for \`${model}\`` }, { status: 400 });

  const tags = getTags.map((getTag) => getTag(entry));
  console.info(tags);
  tags.forEach((tag) => revalidateTag(tag));

  return NextResponse.json({ revalidated: true, now: Date.now() });
};

export { GET, POST };
