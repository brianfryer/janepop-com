import React from 'react';
// import bricolageGrotesque from './utils/bricolageGrotesque';
import interTight from './utils/interTight';

const fonts = [
  // { style: bricolageGrotesque.style, variable: '--font-heading' },
  { style: interTight.style, variable: '--font-ui' },
];

const style = `:root {
  ${fonts.map((font) => `${font.variable}: ${font.style.fontFamily};`).join('\n')}
}`;

const Fonts = () => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/rnv0nks.css" />
    <style
      dangerouslySetInnerHTML={{
        __html: style,
      }}
    />
  </>
);

export default Fonts;
