import watch from "../constants";
import { Hour } from "./Hour";

interface HoursProps {
  currTime: number;
}

const hours = new Array(24).fill(null).map((_, i) => (i % 12) + 1);

export const Hours = ({ currTime }: HoursProps) => {
  return (
    <div
      style={{
        fontSize: watch.hourFontsize,
        color: `${watch.minHourColor}`,
        width: `${watch.size}px`,
        height: `${watch.size}px`,
        position: "absolute",
        top: "0px",
        left: "0px",
        transform: `rotate(${360 - (360 * currTime) / watch.millInADay}deg)`,
      }}
    >
      {hours.map((h, index) => {
        return <Hour key={index} hour={h} index={index} />;
      })}
    </div>
  );
};
