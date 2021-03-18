import React, { useEffect, useRef, useState } from "react";
import watch from "../constants";
import { calculateProps as calc } from "../utils";

interface TimeLineProps {}

export const TimeLine = ({}) => {
  const spanRef = useRef(null);
  // force re-rendering
  const [isAligned, setIsAligned] = useState<boolean>(false);

  const calculateProps = (element: HTMLSpanElement | null) => {
    if (!element) return;
    return calc(watch.size, -0.35, Math.PI / 2, element, Math.PI / 2);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAligned(true);
    }, 100);
  }, []);

  return (
    <span
      ref={spanRef}
      style={{
        position: "absolute",
        height: "2px",
        width: `${watch.size * 0.6}px`,
        backgroundColor: `${isAligned ? watch.accentColor : "rgba(0,0,0,0)"}`,
        ...calculateProps(spanRef.current),
      }}
    ></span>
  );
};
