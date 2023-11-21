import React, { forwardRef } from 'react';
import Markdown from '~/components/Markdown/Markdown';

const Wrapper = forwardRef((props, ref) => {
  const {
    as = 'div',
    children,
    options = {},
    ...rest
  } = props;

  if (typeof children === 'string') {
    return (
      <Markdown
        as={as}
        options={{
          forceWrapper: true,
          ...options,
        }}
        {...rest}
      >
        {children}
      </Markdown>
    );
  }

  const Tag = as;

  return (
    <Tag
      ref={ref}
      {...rest}
    >
      {children}
    </Tag>
  );
});

Wrapper.displayName = 'Wrapper';

export default Wrapper;
