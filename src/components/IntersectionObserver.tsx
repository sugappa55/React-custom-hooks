import useIntersectionObserver from "@/custom-hooks/user-intersection-observer";
import React, { useRef } from "react";

const options = { root: null, threshold: 0.5 };
const IntersectionObserver = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, options);

  return (
    <div>
      <div className='box'>1</div>
      <div className='box'>2</div>
      <div className='box'>3</div>
      <div className='box'>4</div>
      <div className='box'>5</div>
      <div className='box' ref={ref} style={{ backgroundColor: entry?.isIntersecting ? "green" : "initial" }}>
        6
      </div>
      <div className='box'>7</div>
      <div className='box'>8</div>
    </div>
  );
};

export default IntersectionObserver;
