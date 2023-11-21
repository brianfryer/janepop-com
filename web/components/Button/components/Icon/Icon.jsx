import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { has } from 'lodash';
import styles from './Icon.module.scss';

const Icon = (props) => {
  const {
    alt = '',
    className,
    icon,
    iconClassName,
    ...rest
  } = props;

  return (
    <span className={clsx(styles.Icon__wrapper, className)}>
      {(() => {
        if (has(icon, 'iconName')) {
          return (
            <FontAwesomeIcon
              className={clsx(styles.Icon, iconClassName)}
              icon={icon}
            />
          );
        }

        if (has(icon, 'type.render')) {
          const Svg = icon;
          return (
            <Svg
              className={clsx(styles.Icon, iconClassName)}
              {...rest}
            />
          );
        }

        return (
          <img
            alt={alt}
            className={clsx(styles.Icon, iconClassName)}
            src={icon}
            {...rest}
          />
        );
      })()}
    </span>
  );
};

export default Icon;
