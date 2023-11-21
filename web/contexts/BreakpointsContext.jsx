'use client';

import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { findKey, has } from 'lodash';
import breakpoints from '~/config/breakpoints.json';

const BreakpointsContext = createContext();

const mediaQueryStrings = {
  xs: `(max-width: ${breakpoints.sm - 1}px)`,
  sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  md: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  lg: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
};

const initialState = {
  breakpoint: null,
};

const BreakpointsContextProvider = (props) => {
  const { children } = props;

  const [state, setState] = useState(initialState);

  const updateState = useCallback(
    (context) => setState((prevState) => ({
      ...prevState,
      ...context,
    })),
    [setState],
  );

  const handleMediaQueryChange = useCallback((e) => {
    if (e.matches) {
      const breakpoint = findKey(mediaQueryStrings, (media) => media === e.media);
      updateState({ breakpoint });
    }
  }, [updateState]);

  useEffect(() => {
    const mediaQueries = Object
      .values(mediaQueryStrings)
      .map((media) => window.matchMedia(media));
    const setMediaQueryListener = (type, { mediaQuery, listener }) => {
      const method = `${type}EventListener`;

      return has(mediaQuery, method)
        ? mediaQuery[method]('change', listener)
        : mediaQuery[`${type}Listener`](listener);
    };

    mediaQueries.forEach((mediaQuery) => {
      handleMediaQueryChange(mediaQuery);
      setMediaQueryListener('add', { mediaQuery, listener: handleMediaQueryChange });
    });

    return () => (
      mediaQueries.forEach((mediaQuery) => (
        setMediaQueryListener('remove', { mediaQuery, listener: handleMediaQueryChange })
      ))
    );
  }, [handleMediaQueryChange]);

  return (
    <BreakpointsContext.Provider value={{ ...state }}>
      {children}
    </BreakpointsContext.Provider>
  );
};

export default BreakpointsContext;
export { BreakpointsContextProvider };
