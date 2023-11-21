import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Icon from './components/Icon/Icon';
import Wrapper from './Wrapper';
import styles from './Button.module.scss';

const Button = forwardRef((props, ref) => {
  const {
    as = 'button',
    children,
    className,
    disabled,
    iconEnd = null,
    iconEndClassName,
    iconStart = null,
    iconStartClassName,
    isExtraLarge = false,
    isLarge = false,
    isOutline = false,
    isVisible,
    ...rest
  } = props;

  if (!children && !iconStart && !iconEnd) return null;

  return (
    <span
      className={clsx(styles.Button__wrapper, className, {
        [styles.disabled]: disabled,
        [styles.isExtraLarge]: isExtraLarge,
        [styles.isLarge]: isLarge,
        [styles.isOutline]: isOutline,
      })}
      {...(disabled && { 'data-disabled': '' })}
    >
      <span
        aria-hidden="true"
        className={styles.Button__fauxBg}
      />
      {isOutline && (
        <span
          aria-hidden="true"
          className={styles.Button__fauxBorder}
        />
      )}
      <Wrapper
        as={as}
        className={styles.Button}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {iconStart && (
          <Icon
            className={styles.Button__icon}
            iconClassName={iconStartClassName}
            icon={iconStart}
          />
        )}
        {children && (
          <span className={styles.Button__label}>
            {children}
          </span>
        )}
        {iconEnd && (
          <Icon
            className={styles.Button__icon}
            icon={iconEnd}
            iconClassName={iconEndClassName}
          />
        )}
      </Wrapper>
    </span>
  );
});

Button.displayName = 'Button';

export default Button;
