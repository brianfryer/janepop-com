import React from 'react';

const EmbedCode = (props) => {
  const { children } = props;
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

export default EmbedCode;
