'use client';

import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
import { AnimatePresence, motion } from 'framer-motion';
import GlobalContext from '~/contexts/GlobalContext';
import Button from '~/components/Button/Button';
import Blurb from './components/Blurb/Blurb';
import styles from './announcement-bar.module.scss';

const AnnouncementBar = (props) => {
  const { data } = props;

  const {
    blurb,
    buttonLabel,
    buttonUrl,
    isButtonVisible,
    isVisible,
  } = data?.attributes || {};

  const { areFontsPreloaded } = useContext(GlobalContext);

  const isReallyVisible = useMemo(() => {
    if (!isVisible || !blurb) return false;
    return areFontsPreloaded;
  }, [areFontsPreloaded, blurb, isVisible]);

  const isButtonReallyVisible = useMemo(() => {
    if (!isButtonVisible || !buttonLabel || !buttonUrl) return false;
    return true;
  }, [buttonLabel, buttonUrl, isButtonVisible]);

  const ref = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const observedHeight = entries[0].contentRect.height;
      document.documentElement.style.setProperty('--announcement-bar-height', `${observedHeight}px`);
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => resizeObserver.disconnect();
  }, [isReallyVisible]);

  return (
    <AnimatePresence>
      {isReallyVisible && (
        <motion.aside
          className={styles.AnnouncementBar__root}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          <div
            className={styles.AnnouncementBar__wrapper}
            ref={ref}
          >
            <div className={styles.AnnouncementBar}>
              <span className={styles.AnnouncementBar__fauxBg} />
              <Blurb
                blurb={blurb}
                className={clsx(styles.AnnouncementBar__blurb, {
                  [styles.isButtonReallyVisible]: isButtonReallyVisible,
                })}
              >
                {isButtonReallyVisible && (
                  <div className={styles.AnnouncementBar__button__wrapper}>
                    <Button
                      className={styles.AnnouncementBar__button}
                      href={buttonUrl}
                      isLarge
                      isOutline
                    >
                      {parse(buttonLabel)}
                    </Button>
                  </div>
                )}
              </Blurb>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
