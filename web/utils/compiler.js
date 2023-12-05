import React from 'react';
import { compiler as markdownCompiler } from 'markdown-to-jsx';
import namedCodesToUnicode from '~/components/Markdown/utils/namedCodesToUnicode';

const DEFAULT_OPTIONS = {
  forceBlock: true,
  namedCodesToUnicode,
  wrapper: React.Fragment,
};

const compiler = (s, options) => markdownCompiler(s || '', {
  ...DEFAULT_OPTIONS,
  ...options,
});

export default compiler;
