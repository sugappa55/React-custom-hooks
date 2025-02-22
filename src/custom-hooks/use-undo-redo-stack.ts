import { useCallback, useRef, useState } from "react";

const useUndoRedoStack = <T>(
  initValue: T
): [T, (...args: any[]) => void, { undo: () => void; redo: () => void; history: T[] }] => {
  const [state, setState] = useState<T>(initValue);
  const historyRef = useRef<T[]>([state]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v: any) => {
      const resolvedValue = typeof v === "function" ? v(state) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (historyRef.current.length - 1 !== pointerRef.current) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);
        pointerRef.current = historyRef.current.length - 1;
      }
      setState(resolvedValue);
    },
    [state]
  );

  const undo = useCallback(() => {
    if (pointerRef.current === 0) return;
    pointerRef.current--;
    setState(historyRef.current[pointerRef.current]);
  }, []);

  const redo = useCallback(() => {
    if (pointerRef.current === historyRef.current.length - 1) return;
    pointerRef.current++;
    setState(historyRef.current[pointerRef.current]);
  }, []);

  return [state, set, { undo, redo, history: historyRef.current }];
};
export default useUndoRedoStack;
