import { useMemo } from 'react';
import { shuffle } from 'lodash';
import equalChunks from './equalChunks';

const useEqualChunks = (list, length, performShuffle) => {
  const chunks = useMemo(() => {
    const len = length ?? list?.length ?? 0;
    if (!list || !len) return [];
    const lis = performShuffle ? shuffle(list) : list;
    return equalChunks(lis, len);
  }, [length, list, performShuffle]);

  return chunks;
};

export default useEqualChunks;
