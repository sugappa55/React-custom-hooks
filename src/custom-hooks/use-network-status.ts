import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const handleStatus = () => setActive(!!navigator.onLine);
    window.addEventListener("load", handleStatus);
    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);

    return () => {
      window.removeEventListener("load", handleStatus);
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, []);
  return active;
};
export default useNetworkStatus;
