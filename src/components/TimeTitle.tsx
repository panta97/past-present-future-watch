import React, { useEffect, useRef, useState } from "react";
import { PositionProps } from "../utils";
import { TitleType } from "./Titles";

interface TimeTitleProps {
  type: TitleType;
  calculateProps: (
    type: TitleType,
    element: HTMLSpanElement | null
  ) => PositionProps | undefined;
  children: React.ReactNode;
  color: string;
}

export const TimeTitle = ({
  type,
  calculateProps,
  children,
  color,
}: TimeTitleProps) => {
  const spanRef = useRef(null);
  // force re-rendering
  const [isAligned, setIsAligned] = useState<boolean>(false);

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
        color: `${isAligned ? color : "rgba(0,0,0,0)"}`,
        ...calculateProps(type, spanRef.current),
      }}
    >
      {children}
    </span>
  );
};
