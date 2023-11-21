'use client';

import { useEffect } from 'react';

const AdminPage = () => {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STRAPI_API_URL) return;
    const url = new URL('/admin', process.env.NEXT_PUBLIC_STRAPI_API_URL);
    if (!url) return;
    window.location = url.toString();
  }, []);
  return null;
};

export default AdminPage;
