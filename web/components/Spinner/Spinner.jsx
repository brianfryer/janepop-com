import React from 'react';
import clsx from 'clsx';
import { faCircle, faSpinnerThird } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Spinner.module.scss';

const SPINNERS = [
  { icon: faCircle, key: 'background' },
  { icon: faSpinnerThird, key: 'foreground' },
];

const renderSpinners = SPINNERS.map((spinner) => {
  const { icon, key } = spinner;

  return (
    <FontAwesomeIcon
      className={clsx(styles.Spinner, styles[key])}
      icon={icon}
      key={key}
    />
  );
});

const Spinner = (props) => {
  const { className, ...rest } = props;

  return (
    <span
      className={clsx(styles.Spinner__wrapper, className)}
      {...rest}
    >
      {renderSpinners}
      {/* This is used for font loading */}
      &nbsp;
    </span>
  );
};

export default Spinner;
