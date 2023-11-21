import { useEffect, useState } from 'react';

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  // The following effect will be ignored on server,
  // but run on the browser to set the flag true
  useEffect(() => setIsClient(true), []);

  return isClient;
};

export default useIsClient;
