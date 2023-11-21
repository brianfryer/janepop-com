import { range } from 'lodash';

const equalChunks = (array, max) => {
  const length = Math.ceil(array.length / max);
  let size = Math.ceil(array.length / length);

  return range(length).map((i) => {
    if (array.length === (size * length) - (length + i)) size -= 1;
    return array.slice(size * i, size * (i + 1));
  });
};

export default equalChunks;
