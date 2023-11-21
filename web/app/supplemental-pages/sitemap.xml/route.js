/* eslint-disable import/prefer-default-export */
import { getServerSideSitemap } from 'next-sitemap';
import { NextResponse } from 'next/server';
import baseUrl from '~/utils/baseUrl';
import formatErrorMessage from '~/utils/formatErrorMessage';

export const runtime = 'edge';

const revalidation = {
  getTag: () => 'supplemental-pages/sitemap.xml',
  models: ['supplemental-page'],
};

const GET = async (request) => {
  try {
    const url = new URL('/supplemental-pages', baseUrl);
    const endpoint = url.toString();
    const tag = revalidation.getTag();
    const response = await fetch(endpoint, { next: { tags: [tag] } }).catch((error) => {
      const message = formatErrorMessage(error, endpoint, request.nextUrl);
      throw new Error(message);
    });

    if (!response || !response.ok) {
      const message = formatErrorMessage(response.statusText, endpoint, request.nextUrl);
      const error = new Error(message);
      error.status = response.status;
      throw error;
    }

    const supplementalPages = await response.json();

    const urls = supplementalPages.map((page) => {
      const loc = new URL(page.attributes.slug, baseUrl).toString();
      const lastMod = page.attributes.lastMod || page.attributes.updatedAt || page.attributes.createdAt || new Date().toISOString();

      return {
        changefreq: 'weekly',
        lastMod,
        loc,
        priority: 0.7,
      };
    });

    return getServerSideSitemap(urls);
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message || 'Error', { status: error.status || 500 });
  }
};

export { GET, revalidation };
