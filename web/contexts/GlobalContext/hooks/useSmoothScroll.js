import 'smoothscroll-anchor-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
import useEffectOnce from '~/hooks/useEffectOnce';

const useSmoothScroll = () => useEffectOnce(() => smoothscroll.polyfill());

export default useSmoothScroll;
