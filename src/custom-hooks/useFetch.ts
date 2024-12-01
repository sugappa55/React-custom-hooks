import { useEffect, useState } from 'react';
import { makeUrlWithParams, wait } from '../utils';

/**
 * The `useFetch` function in TypeScript is a custom hook that handles fetching data from a specified
 * URL with parameters, providing loading and error states along with the fetched data.
 * @param {string} url - The `url` parameter in the `useFetch` function is a string that represents the
 * URL from which data will be fetched.
 * @param {ParamsType} params - The `params` parameter in the `useFetch` function is used to pass any
 * additional parameters that might be required for the API request. These parameters could include
 * things like query parameters, headers, or any other data needed to make a successful API call. The
 * `params` parameter is typically an object
 * @returns The `useFetch` function returns an object with three properties: `data`, `loading`, and
 * `error`. These properties represent the data fetched from the specified URL, a boolean indicating
 * whether the data is still loading, and an error object containing a message if an error occurred
 * during the fetch process.
 */
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
