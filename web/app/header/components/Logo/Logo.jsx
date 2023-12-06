import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import SVGinsignia from '~/public/images/insignia.svg';
import styles from './Logo.module.scss';

const Logo = (props) => {
  const { className } = props;

  return (
    <Link
      className={clsx(styles.Logo__wrapper, className)}
      href="/"
      title="Home"
    >
      <SVGinsignia className={styles.Logo__insignia} />
      <span className={styles.Logo}>Janepop</span>
    </Link>
  );
};

export default Logo;
