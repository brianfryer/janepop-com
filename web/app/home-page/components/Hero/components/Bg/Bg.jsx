'use client';

import React from 'react';
import clsx from 'clsx';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import breakpoints from '~/config/breakpoints.json';
import styles from './Bg.module.scss';

const Bg = (props) => {
  const { className, style } = props;

  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, breakpoints.sm],
    [1, 0],
  );

  const y = useTransform(
    scrollY,
    [0, breakpoints.lg],
    [0, breakpoints.md],
    { clamp: false },
  );

  // [3.6, 2.4, 1.2, 0.6, 0.3].map((n, i) => (
  //   <span
  //     className={styles.Bg__shape}
  //     key={n}
  //     style={{
  //       opacity: 1 - (i * 0.2),
  //       transform: `translate3d(-50%, ${i * 24}px, 0)`,
  //       // backdropFilter: `blur(${n}px)`,
  //     }}
  //   />
  // ))}

  return (
    <motion.span
      className={clsx(styles.Bg, className)}
      style={{ opacity, y }}
    >
      <span
        className={styles.Bg__image}
        style={style}
      />
    </motion.span>
  );
};

export default Bg;
