import queryString from 'query-string';

const host = 'https://slot-server2.herokuapp.com';
export const wakeHost = () => fetch(host).then(r => r.text());
export const getData = query => {
  const parsed = {
    ...query,
    costoption2: query.costoption2 ? '是' : '否',
    ratingoption1: query.ratingoption1 ? '是' : '否',
  };
  const qs = queryString.stringify(parsed);
  return fetch(`${host}/getRestaurants?${qs}`).then(r => r.json());
};
