import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { isUndefined } from 'lodash';
import namedCodesToUnicode from './utils/namedCodesToUnicode';

const Markdown = (props) => {
  const {
    as = 'div',
    className,
    children,
    options = {},
  } = props;

  const o = options || {};
  const wrapper = isUndefined(options.wrapper) ? as : options.wrapper;

  return (
    <MarkdownToJsx
      className={className}
      options={{
        namedCodesToUnicode,
        ...o,
        ...(wrapper ? { wrapper } : {}),
      }}
    >
      {children}
    </MarkdownToJsx>
  );
};

export default Markdown;
