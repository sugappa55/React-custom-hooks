import useToggle from "@/custom-hooks/use-toggle";
import React from "react";

type Props = {};

const ToggleValue = (props: Props) => {
  const [value, toggle] = useToggle();
  return <div onClick={toggle}>{value.toString()}</div>;
};

export default ToggleValue;
