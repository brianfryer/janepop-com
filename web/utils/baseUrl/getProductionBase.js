const getProductionBase = () => {
  let base;

  if (process.env.NEXT_PUBLIC_HOSTNAME) {
    base = `https://${process.env.NEXT_PUBLIC_HOSTNAME}`;
  } else if (process.env.CF_PAGES_URL) {
    base = process.env.CF_PAGES_URL;
  }

  if (!base) return null;

  return base;
};

export default getProductionBase;
