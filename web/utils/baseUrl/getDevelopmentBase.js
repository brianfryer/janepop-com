const getDevelopmentBase = (port) => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '127.0.0.1';
  return `http://${hostname}:${port}`;
};

export default getDevelopmentBase;
