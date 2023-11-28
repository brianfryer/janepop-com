'use client';

import React, { createContext, useCallback, useState } from 'react';
import usePreloadFonts from './hooks/usePreloadFonts';
import useSmoothScroll from './hooks/useSmoothScroll';
import useSquircle from './hooks/useSquircle';

const GlobalContext = createContext();

const initialState = {
  areFontsPreloaded: false,
};

const GlobalContextProvider = (props) => {
  const { children } = props;

  const [state, setState] = useState(initialState);

  const updateState = useCallback(
    (context) => setState((prevState) => ({ ...prevState, ...context })),
    [setState],
  );

  useSmoothScroll();

  usePreloadFonts({ updateState });

  useSquircle();

  return (
    <GlobalContext.Provider value={{ ...state, updateState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalContextProvider };
