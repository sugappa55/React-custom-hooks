import { useEffect, useState } from 'react';

/**
 * The `useDebounce` function in TypeScript is used to debounce a value with a specified delay.
 * @param {T} val - The `val` parameter in the `useDebounce` function represents the value that you
 * want to debounce. It is the input value that you want to delay before updating the state.
 * @param [delay=500] - The `delay` parameter in the `useDebounce` function represents the amount of
 * time in milliseconds to wait before updating the value with the latest input. By default, the delay
 * is set to 500 milliseconds if no value is provided when calling the function.
 * @returns The `useDebounce` custom hook returns the debounced value of the input `val`.
 */
const useDebounce = <T>(val: T, delay = 500) => {
  const [value, setValue] = useState<T>(val);

  useEffect(() => {
    const id = setTimeout(() => setValue(val), delay);
    return () => clearTimeout(id);
  }, [val, delay]);

  return value;
};

export default useDebounce;
