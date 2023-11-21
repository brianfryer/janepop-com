'use client';

import React from 'react';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { BreakpointsContextProvider } from '~/contexts/BreakpointsContext';
import { GlobalContextProvider } from '~/contexts/GlobalContext';
import QueryClientProvider from './components/QueryClientProvider';

const Providers = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider>
      <BreakpointsContextProvider>
        <GlobalContextProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </GlobalContextProvider>
      </BreakpointsContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
