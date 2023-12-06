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
    target: rawTarget,
    ...rest
  } = props;

  const hash = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const url = new URL(href, window.location.origin);
    return url.hash;
  }, [href]);

  const target = useMemo(() => {
    if (rawTarget) return rawTarget;
    return isUrlExternal(href, window.location.hostname) ? '_blank' : undefined;
  }, [hash, rawTarget]);

  const isNativeLink = useMemo(() => {
    if (typeof window === 'undefined') return false;
    if (target === '_blank') return true;
    if (['mailto:', 'tel:', 'sms:'].some((s) => href.startsWith(s))) return true;
  }, [href, target]);

  const handleClick = useCallback((e) => {
    onClick(e);

    if (isNativeLink || !hash) return;

    // e.preventDefault();

    const id = hash.split('#').pop();
    const destination = document.getElementById(id);

    if (destination) {
      const { top } = destination.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + top);
    }
  }, [hash, isNativeLink, onClick]);

  if (isNativeLink) {
    return (
      <a
        href={href}
        onClick={handleClick}
        ref={ref}
        target={target}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      {children}
    </NextLink>
  );
});

Link.displayName = 'Link';

export default Link;
