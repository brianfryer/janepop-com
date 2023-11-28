import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { isUndefined } from 'lodash';

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
        namedCodesToUnicode: {
          '#8209': '\u2011',
          '#9642': '\u25AA',
          copy: '\u00A9',
          hellip: '\u2026',
          larr: '\u2190',
          ldquo: '\u201C',
          lsquo: '\u2018',
          mdash: '\u2014',
          ndash: '\u2013',
          rarr: '\u2192',
          rdquo: '\u201D',
          rsquo: '\u2019',
          shy: '\u00AD',
        },
        ...o,
        ...(wrapper ? { wrapper } : {}),
      }}
    >
      {children}
    </MarkdownToJsx>
  );
};

export default Markdown;
