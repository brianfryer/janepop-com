import useEffectOnce from '~/hooks/useEffectOnce';

const usePreloadFonts = (props) => {
  const { updateState } = props;

  useEffectOnce(() => {
    let timer;

    if (typeof document !== 'undefined') {
      document.fonts.ready.then(() => {
        timer = setTimeout(() => updateState({ areFontsPreloaded: true }));
      }, 500);
    }

    return () => clearTimeout(timer);
  });
};

export default usePreloadFonts;
