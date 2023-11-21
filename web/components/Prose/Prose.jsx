import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Wrapper from './Wrapper';
import styles from './Prose.module.scss';

const FONT_SIZES = {
  sm: 'prose-sm',
  lg: 'prose-lg',
  xl: 'prose-xl',
  '2xl': 'prose-2xl',
};

const Prose = forwardRef((props, ref) => {
  const {
    as,
    children,
    className,
    fontSize,
    ...rest
  } = props;

  return (
    <Wrapper
      as={as}
      className={clsx(
        styles.Prose,
        'prose',
        'prose-headings:font-heading',
        FONT_SIZES[fontSize],
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Wrapper>
  );
});

Prose.displayName = 'Prose';

export default Prose;
