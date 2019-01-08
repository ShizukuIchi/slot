import { useState } from 'react';
import queryString from 'query-string';

const useData = callback => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch(query) {
    if (isFetching) return;
    setIsFetching(true);
    const parsed = {
      ...query,
      costoption2: query.costoption2 ? '是' : '否',
      ratingoption1: query.ratingoption1 ? '是' : '否',
    };
    const qs = queryString.stringify(parsed);
    return fetch(`https://slot-server.herokuapp.com/getRestaurants?${qs}`).then(
      r => r.json(),
    );
  }
  return [isFetching, onFetch];
};

export default useData;
