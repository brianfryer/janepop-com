import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import balanceText from 'balance-text';
import clsx from 'clsx';
import { debounce } from 'lodash';
import BreakpointsContext from '~/contexts/BreakpointsContext';
import GlobalContext from '~/contexts/GlobalContext';
import Markdown from '~/components/Markdown/Markdown';
import Prose from '~/components/Prose/Prose';
import styles from './Blurb.module.scss';

const Blurb = (props) => {
  const { blurb, children, className } = props;

  // remove newline characters
  const formattedBlurb = useMemo(() => blurb.split('\n').filter(Boolean).join(' '), [blurb]);

  const { areFontsPreloaded } = useContext(GlobalContext);

  const { breakpoint } = useContext(BreakpointsContext);

  const ref = useRef(null);

  const renderP = useCallback((pProps) => {
    const { children: pChildren, className: pClassName, ...rest } = pProps;

    return (
      <p
        className={clsx(pClassName, {
          lead: formattedBlurb.length <= 50,
        })}
        {...rest}
      >
        {pChildren}
      </p>
    );
  }, [formattedBlurb]);

  useEffect(() => {
    const resize = () => balanceText(ref.current);
    const debouncedResize = debounce(resize, 300);

    if (areFontsPreloaded) {
      if (breakpoint !== 'xs') {
        resize();
        window.addEventListener('resize', debouncedResize);
      } else {
        window.removeEventListener('resize', debouncedResize);
      }
    }

    return () => window.removeEventListener('resize', debouncedResize);
  }, [areFontsPreloaded, breakpoint]);

  return (
    <div
      className={clsx(styles.Blurb__wrapper, className, {
        [styles.areFontsPreloaded]: areFontsPreloaded,
      })}
    >
      <Prose
        className={styles.Blurb}
        ref={ref}
      >
        <Markdown
          options={{
            forceBlock: true,
            overrides: { p: renderP },
            wrapper: React.Fragment,
          }}
        >
          {formattedBlurb}
        </Markdown>
      </Prose>
      {children}
    </div >
  );
};

export default Blurb;
