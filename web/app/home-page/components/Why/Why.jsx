import React from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './Why.module.scss';

const Why = (props) => {
  const { className, data } = props;
  const { componentId, prose } = data?.why || {};

  return (
    <div
      className={clsx(styles.Why__root, className)}
      id={componentId}
    >
      <Container className={styles.Why}>
        <Prose
          className={styles.Why__prose}
          fontSize="lg"
        >
          {prose?.blurb}
        </Prose>
      </Container>
    </div>
  );
};

export default Why;
