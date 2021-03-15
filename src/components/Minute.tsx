import { useEffect, useRef, useState } from "react";
import watch from "../constants";
import { PositionProps } from "../utils";

interface MinuteProps {
  minute: number;
  index: number;
  calculateProps: (
    index: number,
    element: HTMLSpanElement | null
  ) => PositionProps | undefined;
}

export const Minute = ({ minute, index, calculateProps }: MinuteProps) => {
  const spanRef = useRef(null);
  // force re-rendering
  const [, setIsAligned] = useState<boolean>(false);

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
        fontWeight: 500,
        ...calculateProps(index, spanRef.current),
      }}
    >
      {String(minute).padStart(2, "0")}
    </span>
  );
};
