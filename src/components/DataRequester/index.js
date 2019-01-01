import { useState } from 'react';
import json from '../../assets/data.json';

const DataRequester = props => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch() {
    if (isFetching) return;
    setTimeout(() => {
      setIsFetching(false);
      props.callback(json.data);
    }, 500);
    setIsFetching(true);
  }
  return props.children(isFetching, onFetch);
};

export default DataRequester;
