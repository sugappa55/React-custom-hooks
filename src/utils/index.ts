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
