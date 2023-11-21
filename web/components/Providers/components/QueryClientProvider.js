'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// TODO...
// const ONE_MINUTE = 1000 * 60;

const QueryClientProvider = (props) => {
  const { children } = props;

  const [client] = useState(
    new QueryClient({
      // defaultOptions: {
      //   queries: {
      //     staleTime: ONE_MINUTE,
      //   },
      // },
    }),
  );

  return (
    <Provider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Provider>
  );
};

export default QueryClientProvider;
