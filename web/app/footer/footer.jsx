'use client';

import React from 'react';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import fetchFooter from './utils/fetchFooter';
import styles from './footer.module.scss';

const Footer = (props) => {
  const { className, initialData } = props;

  const { data } = useQuery({
    queryKey: ['fetchFooter'],
    queryFn: fetchFooter,
    initialData,
  });

  const { blurb } = data?.attributes || {};

  if (!blurb) return null;

  return (
    <footer className={clsx(styles.Footer, className)}>
      <Container className={styles.Footer__container}>
        <Prose
          className={styles.Footer__blurb}
          options={{ forceBlock: true }}
        >
          {blurb}
        </Prose>
      </Container>
    </footer>
  );
};

export default Footer;
