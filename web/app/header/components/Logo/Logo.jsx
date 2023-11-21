import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
// import PNGlogo from '~/public/images/logo.png';
import styles from './Logo.module.scss';

const Logo = (props) => {
  const { className } = props;

  return (
    <Link
      className={clsx(styles.Logo__wrapper, className)}
      href="/"
      title="Home"
    >
      {/* <img
        alt=""
        className={styles.Logo}
        src={PNGlogo.src}
      /> */}
    </Link>
  );
};

export default Logo;
