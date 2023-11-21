import React, { forwardRef } from 'react';
import Link from '~/components/Link/Link';

const ButtonWrapper = forwardRef((props, ref) => {
  const {
    as,
    children,
    type = 'button',
    ...rest
  } = props;
  const Tag = as;
  const isButton = as === 'button';

  return (
    <Tag
      ref={ref}
      {...(isButton && { type })}
      {...rest}
    >
      {children}
    </Tag>
  );
});

const LinkWrapper = forwardRef((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Link ref={ref} {...rest}>
      {children}
    </Link>
  );
});

const Wrapper = forwardRef((props, ref) => {
  const {
    as,
    children,
    href,
    ...rest
  } = props;

  if (href) {
    return (
      <LinkWrapper href={href} ref={ref} {...rest}>
        {children}
      </LinkWrapper>
    );
  }

  return (
    <ButtonWrapper as={as} ref={ref} {...rest}>
      {children}
    </ButtonWrapper>
  );
});

ButtonWrapper.displayName = 'ButtonWrapper';
LinkWrapper.displayName = 'LinkWrapper';
Wrapper.displayName = 'Wrapper';

export default Wrapper;
