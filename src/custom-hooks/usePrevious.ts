import { useRef } from 'react';

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
