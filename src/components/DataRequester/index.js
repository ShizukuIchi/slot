import { useState } from 'react';
import queryString from 'query-string';

const DataRequester = props => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch() {
    if (isFetching) return;
    setIsFetching(true);
    const parsed = props.fetchArguments;
    parsed.costoption2 = parsed.costoption2 ? '是' : '否';
    parsed.ratingoption1 = parsed.ratingoption1 ? '是' : '否';
    const qs = queryString.stringify(parsed);
    fetch(`https://slot-server.herokuapp.com/getRestaurants?${qs}`)
      .then(r => r.json())
      .then(props.callback)
      .catch(console.log);
  }
  return props.children(isFetching, onFetch);
};

export default DataRequester;
