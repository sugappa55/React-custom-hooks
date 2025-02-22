"use client";

import useWindowSize from "@/custom-hooks/use-window-size";
import React from "react";

const WindowSize = () => {
  const { height, width } = useWindowSize();
  return (
    <div>
      <h1>Window Size</h1>
      <h2>Height - {height}</h2>
      <h2>Width - {width}</h2>
    </div>
  );
};

export default WindowSize;
