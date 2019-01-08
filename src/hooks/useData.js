import { useState } from 'react';
import { getData } from '../api';

const useData = () => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch(query) {
    if (isFetching) return;
    setIsFetching(true);
    return getData(query);
  }
  return [isFetching, onFetch];
};

export default useData;
