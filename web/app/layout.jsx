import React from 'react';
import '~/utils/fontAwesomeConfig';
import '~/styles/main.scss';
import METADATA from '~/public/metadata.json';
import Fonts from '~/components/Fonts/Fonts';
import Providers from '~/components/Providers/Providers';
import SkipLink from '~/components/SkipLink/SkipLink';
import AnnouncementBar from './announcement-bar/announcement-bar';
import fetchGlobalAnnouncementBar from './global-announcement-bar/utils/fetchGlobalAnnouncementBar';
import Header from './header/header';
import fetchHeader from './header/utils/fetchHeader';
import Footer from './footer/footer';
import fetchFooter from './footer/utils/fetchFooter';
import styles from './layout.module.scss';

const MAIN_ID = 'main';
const TOP_ID = 'top';

export const metadata = METADATA;

const Layout = async (props) => {
  const { children } = props;

  const [
    globalAnnouncementBarData,
    footerData,
    headerData,
  ] = await Promise.all([
    fetchGlobalAnnouncementBar(),
    fetchFooter(),
    fetchHeader(),
  ]);

  return (
    <html lang="en">
      <head>
        <Fonts />
        <script src="https://unpkg.com/detect-autofill/dist/detect-autofill.js" defer></script>
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <SkipLink
            className={styles.Layout__skipLink}
            href={`#${MAIN_ID}`}
          />
          <AnnouncementBar data={globalAnnouncementBarData} />
          <div
            className={styles.Layout__root}
            id={TOP_ID}
          >
            <div className={styles.Layout__wrapper}>
              <div className={styles.Layout}>
                <Header
                  className={styles.Layout__header}
                  initialData={headerData}
                />
                <main
                  aria-label="Main Content"
                  className={styles.Layout__main}
                  id={MAIN_ID}
                >
                  {children}
                </main>
                <Footer initialData={footerData} />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
