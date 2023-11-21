const fs = require('fs');
const { parse } = require('node-html-parser');
const requireYml = require('require-yml');
const favicons = require('favicons');
const { noop } = require('lodash');
const colors = require('../tailwind.config.js/colors');

const data = requireYml('./config/favicons/data.yml');

const SITE_URL = new URL(`https://${process.env.NEXT_PUBLIC_HOSTNAME || 'https://www.maypop.store'}`);

const config = {
  ...favicons.config.defaults,
  // path: '/',
  appName: data.appName,
  appShortName: data.appShortName,
  appDescription: data.appDescription,
  developerName: 'Brian Fryer',
  developerURL: 'https://www.plaidshaman.design/',
  // dir: 'auto',
  // lang: 'en-US',
  background: colors.black,
  theme_color: colors.black,
  appleStatusBarStyle: 'black-translucent', // 'default'
  // display: 'standalone',
  // orientation: 'any',
  // start_url: '/?homescreen=1',
  // version: '1.0',
  // pixel_art: false,
  // loadManifestWithCredentials: false,
  // manifestRelativePaths: false,
  // manifestMaskable: false,
  // preferRelatedApplications: false,
  // icons: {
  //   android: true,
  //   appleIcon: true,
  //   appleStartup: true,
  //   favicons: true,
  //   windows: true,
  //   yandex: true
  // },
  // output: {
  //   images: true,
  //   files: true,
  //   html: true,
  // },
};

favicons.favicons('./public/images/favicon.png', config).then(({ files, html, images }) => {
  // write images files and files to `public` directory
  [...images, ...files].forEach(({ contents, name }) => (
    fs.writeFile(`./public/${name}`, contents, noop)
  ));

  // generate metadata.json to be consumed by nextjs metadata api
  const metadata = html.reduce((acc, el) => {
    const $el = parse(el);
    const { attributes } = $el.firstChild;

    const isManifest = attributes.rel === 'manifest';
    if (isManifest) {
      return { ...acc, manifest: attributes.href };
    }

    // const isThemeColor = attributes.name === 'theme-color';
    // if (isThemeColor) {
    //   return { ...acc, themeColor: attributes.content };
    // }

    const isApplicationName = attributes.name === 'application-name';
    if (isApplicationName) {
      return { ...acc, applicationName: attributes.content };
    }

    const isIcon = attributes.rel === 'icon';
    const isAppleTouchIcon = attributes.rel === 'apple-touch-icon';
    if (isIcon || isAppleTouchIcon) {
      const { icons = {} } = acc;
      const key = isIcon ? 'icon' : 'apple';
      const icon = icons[key] || [];

      return {
        ...acc,
        icons: {
          ...icons,
          [key]: [
            ...icon,
            {
              sizes: attributes.sizes,
              type: attributes.type,
              url: attributes.href,
            },
          ],
        },
      };
    }

    const isAppleWebAppTitle = attributes.name === 'apple-mobile-web-app-title';
    const isAppleWebAppStatusBarStyle = attributes.name === 'apple-mobile-web-app-status-bar-style';
    const isAppleTouchStartupImage = attributes.rel === 'apple-touch-startup-image';
    if (isAppleWebAppTitle || isAppleWebAppStatusBarStyle || isAppleTouchStartupImage) {
      const { appleWebApp = {} } = acc;

      const attributeKey = isAppleTouchStartupImage ? 'rel' : 'name';

      const [key, value] = ((name) => {
        if (name === 'apple-mobile-web-app-title') return ['title', attributes.content];
        if (name === 'apple-mobile-web-app-status-bar-style') return ['statusBarStyle', attributes.content];
        if (name === 'apple-touch-startup-image') {
          const { startupImage = [] } = appleWebApp;

          return ['startupImage', [...startupImage, {
            media: attributes.media,
            url: attributes.href,
          }]];
        }
        return undefined;
      })(attributes[attributeKey]);

      return {
        ...acc,
        appleWebApp: {
          ...appleWebApp,
          [key]: value,
        },
      };
    }

    return acc;
  }, {
    metadataBase: new URL(SITE_URL),
    title: {
      default: data.appShortName,
      template: `%s | ${data.appShortName}`,
    },
    description: data.appDescription,
  });

  // console.info('metadata', metadata)
  fs.writeFile('./public/metadata.json', JSON.stringify(metadata), noop);

  // write the JSON file
  // fs.writeFile('./public/favicons.json', JSON.stringify(html), noop);
});
