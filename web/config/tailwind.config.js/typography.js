const typography = () => {
  const elements = [
    ['[class~="lead"]', { color: null }],
    ['a code', { color: null }],
    ['a', { color: null }],
    ['blockquote', { color: null, borderLeftColor: null }],
    ['code', { color: null }],
    ['figcaption', { color: null }],
    ['h1, [class~="h1"]', { color: null }],
    ['h2, [class~="h2"]', { color: null }],
    ['h3, [class~="h3"]', { color: null }],
    ['h4, [class~="h4"]', { color: null }],
    ['h5, [class~="h5"]', { color: null }],
    ['h6, [class~="h6"]', { color: null }],
    ['hr', { borderColor: null }],
    ['ol > li::marker', { color: null }],
    ['pre code', { color: null }],
    ['pre', { color: null, backgroundColor: null }],
    ['strong', { color: null }],
    ['tbody tr', { borderBottomColor: null }],
    ['thead th', { color: null }],
    ['thead', { borderBottomColor: null }],
    ['ul > li::marker', { color: null }],
  ];
  const removeColorFromElements = Object.assign({}, ...elements.map(
    ([key, value]) => ({ [key]: value }),
  ));

  return {
    DEFAULT: {
      css: {
        color: null,
        ...removeColorFromElements,
      },
    },
  };
};

module.exports = typography;
