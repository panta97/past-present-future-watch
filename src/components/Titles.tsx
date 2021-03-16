import React, { memo } from "react";
import watch from "../constants";
import { PositionProps, calculateProps as Calc } from "../utils";
import { TimeLine } from "./TimeLine";
import { TimeTitle } from "./TimeTitle";

export enum TitleType {
  PAST,
  PRESENT,
  FUTURE,
}

export const Titles = memo(() => {
  const calculateProps = (
    type: TitleType,
    element: HTMLSpanElement | null
  ): PositionProps | undefined => {
    if (!element) return;
    switch (type) {
      case TitleType.PAST:
        return Calc(
          watch.size,
          0.6,
          (-3 * Math.PI) / 4,
          element,
          (-5 * Math.PI) / 8
        );
      case TitleType.PRESENT:
        return Calc(watch.size, 0.6, Math.PI / 2, element, Math.PI / 2);
      case TitleType.FUTURE:
        return Calc(
          watch.size,
          0.6,
          -Math.PI / 4,
          element,
          (-3 * Math.PI) / 8 + Math.PI
        );
    }
  };

  return (
    <div
      style={{
        width: watch.size,
        height: watch.size,
        position: "absolute",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        fontWeight: 500,
      }}
    >
      <TimeTitle
        calculateProps={calculateProps}
        type={TitleType.PAST}
        color={watch.paleColor}
      >
        past
      </TimeTitle>
      <TimeTitle
        calculateProps={calculateProps}
        type={TitleType.PRESENT}
        color={watch.accentColor}
      >
        present
      </TimeTitle>
      <TimeTitle
        calculateProps={calculateProps}
        type={TitleType.FUTURE}
        color={watch.paleColor}
      >
        future
      </TimeTitle>
      <TimeLine />
    </div>
  );
});
