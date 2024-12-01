import { useEffect, useState } from 'react';

const useDebounce = <T>(val: T, delay = 500) => {
  const [value, setValue] = useState<T>(val);

  useEffect(() => {
    const id = setTimeout(() => setValue(val), delay);
    return () => clearTimeout(id);
  }, [val, delay]);

  return value;
};

export default useDebounce;
