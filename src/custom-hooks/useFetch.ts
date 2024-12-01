import { useEffect, useState } from 'react';
import { makeUrlWithParams, wait } from '../utils';

const useFetch = <QData, ParamsType>(url: string, params: ParamsType) => {
  const [data, setData] = useState<QData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{
    message: string;
  }>();

  useEffect(() => {
    wait(0).then(() => {
      const urlWithParams = makeUrlWithParams(url, params as any);
      (async function () {
        try {
          const res = await fetch(urlWithParams);
          const response = await res.json();
          setData(response);
        } catch (e) {
          console.log(e);
          setError({ message: String(e) });
        } finally {
          setLoading(false);
        }
      })();
    });
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;
