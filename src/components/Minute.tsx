import { memo, useEffect, useRef, useState } from "react";
import watch from "../constants";
import { PositionProps } from "../utils";

interface MinuteProps {
  minute: number;
  index: number;
}

export const Minute = memo(({ minute, index }: MinuteProps) => {
  const spanRef = useRef(null);
  // force re-rendering
  const [, setIsAligned] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAligned(true);
    }, 100);
  }, []);

  const calculateProps = (
    index: number,
    element: HTMLSpanElement | null
  ): PositionProps | undefined => {
    if (!element) return;
    const translation = watch.size / 2;
    const scale = translation * watch.innerMinuteLen;
    const step = Math.PI / 12;
    const star = Math.PI / 2 + ((step * (index + 1)) % 24);

    let posY = -Math.sin(star) * scale + translation;
    posY += -element.getBoundingClientRect().height / 2;
    let posX = -Math.cos(star) * scale + translation;
    posX += -element.getBoundingClientRect().width / 2;
    let rotate = ((star - Math.PI / 2) * 180) / Math.PI;

    return {
      left: `${posX}px`,
      top: `${posY}px`,
      transform: `rotate(${rotate}deg)`,
    };
  };

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
});
