/* eslint-disable import/no-webpack-loader-syntax, import/extensions, import/no-unresolved */
import cssHoudiniSquircle from 'url-loader!css-houdini-squircle/squircle.min.js';
import useEffectOnce from '~/hooks/useEffectOnce';

const useSquircle = async () => useEffectOnce(() => {
  const setup = async () => {
    if (!('paintWorklet' in CSS)) {
      await import('css-paint-polyfill/src/index');
    }

    CSS
      .paintWorklet
      .addModule(cssHoudiniSquircle)
      .then(() => {
        if (typeof document !== 'undefined') {
          document.body.classList.add('squircle');
        }
      });
  };

  setup();
});

export default useSquircle;
