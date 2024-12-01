/**
 * The `debounce` function in TypeScript helps to limit the frequency of function calls by delaying
 * execution until a certain amount of time has passed without additional calls.
 * @param fn - The `fn` parameter is a function that accepts any number of arguments and does not
 * return any value.
 * @param [delay=500] - The `delay` parameter in the `debounce` function represents the time in
 * milliseconds for which the execution of the `fn` function will be delayed. If multiple calls to the
 * debounced function are made within this delay period, only the last call will be executed after the
 * delay has passed.
 * @returns The `debounce` function is being returned.
 */
export const debounce = (fn: (...args: any[]) => void, delay = 500) => {
  let id: number | undefined;

  return (...args: any[]) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};

export const makeUrlWithParams = (url: string, params: Record<string, string>) => {
  console.log(params);
  const paramsString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
    .join('&');
  return `${url}?${paramsString}`;
};

export const wait = (delay = 1000) =>
  new Promise(res => {
    setTimeout(res, delay);
  });
