'use client';

import React from 'react';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import fetchHeader from './utils/fetchHeader';
import Logo from './components/Logo/Logo';
import Links from './components/Links/Links';
import styles from './header.module.scss';

const Header = (props) => {
  const { className, initialData } = props;

  const { data } = useQuery({
    queryKey: ['fetchHeader'],
    queryFn: fetchHeader,
    initialData,
  });

  const { links = [] } = data?.attributes || {};

  return (
    <header className={clsx(styles.Header__root, className)}>
      <div className={styles.Header}>
        <Logo className={styles.Header__logo} />
        <Links
          className={styles.Header__links}
          data={{ links }}
        />
      </div>
    </header>
  );
};

export default Header;
