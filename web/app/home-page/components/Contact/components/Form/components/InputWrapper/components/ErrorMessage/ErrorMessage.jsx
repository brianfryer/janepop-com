import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Markdown from '~/components/Markdown/Markdown';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = forwardRef((props, ref) => {
  const { className, error } = props;

  return (
    <div
      className={clsx(styles.ErrorMessage, className)}
      ref={ref}
    >
      <div
        className={styles.ErrorMessage__message__wrapper}
        ref={ref}
        role="alert"
      >
        <Markdown className={styles.ErrorMessage__message}>
          {error.message}
        </Markdown>
      </div>
    </div>
  );
});

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
