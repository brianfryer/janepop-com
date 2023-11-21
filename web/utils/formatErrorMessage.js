const formatErrorMessage = (error, endpoint, nextUrl, params) => {
  const stringifiedNextUrl = ((n) => {
    try {
      return JSON.stringify(n, null, 2);
    } catch {
      return n;
    }
  })(nextUrl);

  const stringifiedParams = ((p) => {
    try {
      return JSON.stringify(p, null, 2);
    } catch {
      return p;
    }
  })(params);

  const messagePieces = [
    stringifiedNextUrl,
    endpoint,
    stringifiedParams,
    error,
  ];

  return messagePieces.filter(Boolean).join('\n');
};

export default formatErrorMessage;
