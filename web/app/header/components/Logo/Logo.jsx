import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = (props) => {
  const { className } = props;

  return (
    <Link
      className={clsx(styles.Logo, className)}
      href="/"
      title="Home"
    >
      Janepop Shops
    </Link>
  );
};

export default Logo;
