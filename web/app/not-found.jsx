import React from 'react';
import Button from '~/components/Button/Button';
import Prose from '~/components/Prose/Prose';
import styles from './not-found.module.scss';

const NotFound = () => (
  <div className={styles.NotFound}>
    <Prose className={styles.NotFound__prose}>
      <h1>
        Error 404
        <br />
        Page Not Found
      </h1>
      <div className="not-prose">
        <Button
          className={styles.NotFound__button}
          href="/"
        >
          Back to home
        </Button>
      </div>
    </Prose>
  </div>
);

export default NotFound;
