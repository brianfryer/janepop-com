'use client';

import React, { useCallback } from 'react';
import clsx from 'clsx';
import { faArrowDown } from '@fortawesome/sharp-regular-svg-icons';
import Button from '~/components/Button/Button';
import styles from './SkipLink.module.scss';

const SkipLink = (props) => {
  const { className, ...rest } = props;
  const handleClick = useCallback(() => document.activeElement.blur(), []);

  return (
    <Button
      className={clsx(styles.SkipLink, className)}
      iconEnd={faArrowDown}
      onClick={handleClick}
      {...rest}
    >
      Skip to main content
    </Button>
  );
};

export default SkipLink;
