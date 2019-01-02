import { useState } from 'react';
import json from '../../assets/data.json';

const DataRequester = props => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch() {
    if (isFetching) return;
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      props.callback(json.data);
    }, 500);
  }
  return props.children(isFetching, onFetch);
};

export default DataRequester;
