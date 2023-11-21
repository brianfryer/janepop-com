'use client';

import React, { forwardRef, useCallback, useMemo } from 'react';
import NextLink from 'next/link';
import { isUrlExternal } from 'is-url-external';
import { noop } from 'lodash';

const Link = forwardRef((props, ref) => {
  const {
    children,
    href,
    onClick = noop,
    onKeyDown = noop,
    target,
    ...rest
  } = props;

  const isNativeLink = useMemo(
    () => {
      if (typeof window === 'undefined') return false;
      if (target === '_blank') return true;
      if (['mailto:', 'tel:', 'sms:'].some((s) => href.startsWith(s))) return true;

      return isUrlExternal(href, window.location.hostname);
    },
    [href, target],
  );

  const hash = useMemo(
    () => {
      if (typeof window === 'undefined') return false;
      const url = new URL(href, window.location.origin);
      return url.hash;
    },
    [href],
  );

  const handleClick = useCallback(
    (e) => {
      onClick(e);
      onKeyDown(e);

      if (isNativeLink || !hash) return;

      e.preventDefault();

      const id = hash.split('#').pop();
      const destination = document.getElementById(id);

      if (destination) {
        const { top } = destination.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + top);
      }
    },
    [
      hash,
      isNativeLink,
      onClick,
      onKeyDown,
    ],
  );

  return (
    <>
      {isNativeLink ? (
        <a
          href={href}
          onClick={handleClick}
          onKeyDown={handleClick}
          ref={ref}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <NextLink
          href={href}
          onClick={handleClick}
          onKeyDown={handleClick}
          ref={ref}
          {...rest}
        >
          {children}
        </NextLink>
      )}
    </>
  );
});

Link.displayName = 'Link';

export default Link;
