import { useState } from 'react';
import json from '../../assets/data.json';

const DataRequester = props => {
  const [isFetching, setIsFetching] = useState(false);
  function onFetch() {
    if (isFetching) return;
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      const random = Math.floor(Math.random() * (json.data.length - 50));
      const data = json.data.slice(random, random + 50);
      props.callback(data);
    }, 500);
  }
  return props.children(isFetching, onFetch);
};

export default DataRequester;
