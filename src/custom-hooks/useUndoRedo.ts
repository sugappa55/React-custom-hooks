import { useCallback, useRef, useState } from 'react';

const useUndoRedo = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const history = useRef<any[]>([initialValue]);
  const pointer = useRef(0);

  const set = useCallback(
    (v: any) => {
      const resolvedValue = typeof v === 'function' ? v(value) : v;

      if (pointer.current !== history.current.length - 1) {
        history.current.splice(pointer.current + 1);
      }

      history.current.push(resolvedValue);
      pointer.current = history.current.length - 1;

      setValue(resolvedValue);
    },
    [value]
  );

  const next = () => {
    if (pointer.current >= history.current.length - 1) return;
    pointer.current++;
    setValue(history.current[pointer.current]);
  };

  const back = () => {
    if (pointer.current <= 0) return;
    pointer.current--;
    setValue(history.current[pointer.current]);
  };

  return { value, setValue: set, back, next, history: history.current, pointer: pointer.current };
};

export default useUndoRedo;
