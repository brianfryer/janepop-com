const formatMetadata = (metadata) => Object.entries(metadata).reduce((acc, [key, value]) => {
  if (value) {
    acc[key] = value;
  }
  return acc;
}, {});

export default formatMetadata;
