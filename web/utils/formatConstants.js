const formatConstants = (constants) => (
  constants.reduce((acc, constant) => {
    const [id, name, slug] = constant;
    return { ...acc, [slug]: { id, name, slug } };
  }, {})
);

export default formatConstants;
