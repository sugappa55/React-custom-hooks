import { useEffect, useState } from "react";

const useIntersectionObserver = (ref: any, options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver !== "function") return;
    const observer = new IntersectionObserver(entries => {
      setEntry(entries[0]);
    }, options);
    observer.observe(ref.current);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [options]);

  return entry;
};
export default useIntersectionObserver;
