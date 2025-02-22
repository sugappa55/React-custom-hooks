import { useEffect, useState } from "react";

const useStorage = (key: string, initVal: any, storage: Storage) => {
  const [value, setValue] = useState(() => {
    if (typeof initVal === "function") return initVal();
    const storageVal = storage.getItem(key);
    if (storageVal) return JSON.parse(storageVal);
    else return initVal;
  });

  useEffect(() => {
    if (!value) storage.removeItem(key);
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  const remove = () => {
    storage.removeItem(key);
    setValue("");
  };

  return [value, setValue, remove];
};

export const useLocalStorage = (key: string, initVal: any) => useStorage(key, initVal, localStorage);
export const useSessionStorage = (key: string, initVal: any) => useStorage(key, initVal, sessionStorage);
