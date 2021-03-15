import { useEffect, useRef, useState } from "react";
import { PositionProps } from "../utils";

interface HourProps {
  hour: number;
  index: number;
  calculateProps: (
    index: number,
    element: HTMLSpanElement | null
  ) => PositionProps | undefined;
}

export const Hour = ({ hour, index, calculateProps }: HourProps) => {
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
      {hour}
    </span>
  );
};
