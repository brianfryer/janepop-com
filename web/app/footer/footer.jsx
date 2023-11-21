import React from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './footer.module.scss';

const Footer = (props) => {
  const { className, data } = props;
  const { blurb } = data?.attributes || {};

  return (
    <footer className={clsx(styles.Footer, className)}>
      <Container className={styles.Footer__container}>
        <Prose className={styles.Footer__blurb}>
          {blurb}
        </Prose>
      </Container>
    </footer>
  );
};

export default Footer;
