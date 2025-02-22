import useNetworkStatus from "@/custom-hooks/use-network-status";
import React from "react";

const NetworkStatus = () => {
  const isActive = useNetworkStatus();
  return <div className={isActive ? "green" : "red"}>NetworkStatus - {isActive.toString()}</div>;
};

export default NetworkStatus;
