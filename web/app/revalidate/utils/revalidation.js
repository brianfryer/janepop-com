import { revalidation as footerRevalidation } from '~/app/footer/route';
import { revalidation as globalAnnouncementBarRevalidation } from '~/app/global-announcement-bar/route';
import { revalidation as globalSeoRevalidation } from '~/app/global-seo/route';
import { revalidation as headerRevalidation } from '~/app/header/route';
import { revalidation as homePageRevalidation } from '~/app/home-page/route';

const revalidation = [
  footerRevalidation,
  globalAnnouncementBarRevalidation,
  globalSeoRevalidation,
  headerRevalidation,
  homePageRevalidation,
].reduce((acc, { models, getTag }) => {
  models.forEach((model) => {
    const prev = acc[model] || [];
    acc[model] = [...prev, getTag];
  });
  return acc;
}, {});

export default revalidation;
