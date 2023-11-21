import React from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './About.module.scss';

const About = (props) => {
  const { className, data } = props;
  const { componentId, prose } = data?.about || {};

  return (
    <div
      className={clsx(styles.About__root, className)}
      id={componentId}
    >
      <Container className={styles.About}>
        <Prose
          className={styles.About__prose}
          fontSize="lg"
        >
          {prose?.blurb}
        </Prose>
      </Container>
    </div>
  );
};

export default About;
