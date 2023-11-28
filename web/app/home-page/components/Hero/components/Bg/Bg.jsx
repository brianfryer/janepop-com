'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Bg.module.scss';

const Bg = (props) => {
  const { className } = props;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -300]);

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
      style={{ y }}
    />
  );
};

export default Bg;
