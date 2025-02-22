import { useRef } from 'react';

/**
 * The `usePrevious` function in TypeScript returns the previous value of a given input.
 * @param {T} val - The `val` parameter in the `usePrevious` function represents the current value that
 * you want to track and get the previous value of.
 * @returns The `usePrevious` function returns the previous value of the input `val` that was passed to
 * it.
 */
const usePrevious = <T>(val: T) => {
  const currentValueRef = useRef<T>(val);
  const previousValueRef = useRef<T>();

  if (val !== currentValueRef.current) {
    previousValueRef.current = currentValueRef.current;
    currentValueRef.current = val;
  }

  return previousValueRef.current;
};

export default usePrevious;
