export const debounce = (fn: (...args: any[]) => void, delay = 500) => {
  let id: number | undefined;

  return (...args: any[]) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};
