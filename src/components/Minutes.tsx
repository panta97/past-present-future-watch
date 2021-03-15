import watch from "../constants";
import { Minute } from "./Minute";

interface MinutesProps {
  currTime: number;
}

const minutes = new Array(24).fill(null).map((_, i) => (i * 5 + 5) % 60);

export const Minutes = ({ currTime }: MinutesProps) => {
  return (
    <div
      style={{
        fontSize: watch.minuteFontsize,
        width: `${watch.size}px`,
        height: `${watch.size}px`,
        position: "absolute",
        top: "0px",
        left: "0px",
        transform: `rotate(${
          (360 - 360 * (currTime / (watch.millInADay / 720))) % 360
        }deg)`,
      }}
    >
      {minutes.map((m, index) => {
        return <Minute key={index} minute={m} index={index} />;
      })}
    </div>
  );
};
