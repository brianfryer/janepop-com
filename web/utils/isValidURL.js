const isValidURL = (string) => {
  try {
    return Boolean(new URL(string));
  } catch {
    return false;
  }
};

export default isValidURL;
