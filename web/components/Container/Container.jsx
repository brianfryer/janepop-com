import React from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

const Container = (props) => {
  const {
    children,
    className,
    as = 'div',
    ...rest
  } = props;

  const Tag = as;

  return (
    <Tag
      className={clsx(styles.Container, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Container;
