import watch from "../constants";
import { PositionProps } from "../utils";
import { Hour } from "./Hour";

interface HoursProps {}
const hours = new Array(24).fill(null).map((_, i) => (i % 12) + 1);

export const Hours = ({}) => {
  const calculateProps = (
    index: number,
    element: HTMLSpanElement | null
  ): PositionProps | undefined => {
    if (!element) return;
    const translation = watch.size / 2;
    const scale = translation * watch.innerHourLen;
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
    <div
      style={{
        fontSize: watch.hourFontsize,
        width: `${watch.size}px`,
        height: `${watch.size}px`,
        position: "absolute",
        top: "0px",
        left: "0px",
      }}
    >
      {hours.map((h, index) => {
        return (
          <Hour
            key={index}
            hour={h}
            index={index}
            calculateProps={calculateProps}
          />
        );
      })}
    </div>
  );
};
