import React from 'react';
import inter from './utils/inter';
import montserrat from './utils/montserrat';
import quicksand from './utils/quicksand';

const fonts = [
  { style: inter.style, variable: '--font-ui' },
  { style: montserrat.style, variable: '--font-body' },
  { style: quicksand.style, variable: '--font-heading' },
];

const style = `:root {
  ${fonts.map((font) => `${font.variable}: ${font.style.fontFamily};`).join('\n')}
}`;

const Fonts = () => (
  <>
    {/* <link rel="stylesheet" href="https://use.typekit.net/rnv0nks.css" /> */}
    <style
      dangerouslySetInnerHTML={{
        __html: style,
      }}
    />
  </>
);

export default Fonts;
