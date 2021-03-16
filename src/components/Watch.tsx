import { useEffect, useState } from "react";
import watch from "../constants";
import { Cover } from "./Cover";
import { Hours } from "./Hours";
import { Minutes } from "./Minutes";
import { Titles } from "./Titles";

interface WatchProps {}

export const Watch = ({}: WatchProps) => {
  const today = new Date();
  // milliseconds at star of the day
  let star = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0
  ).getTime();
  const [currTime, setCurrTime] = useState<number>(0);
  useEffect(() => {
    const tick = () => {
      setTimeout(() => {
        setCurrTime(new Date().getTime() - star);
        requestAnimationFrame(tick);
      }, 1000 / 1);
    };
    tick();
  }, [star]);

  return (
    <div
      style={{
        border: `${watch.arcSize}px solid ${watch.arcColor}`,
        borderRadius: "50%",
        backgroundColor: `${watch.bgColor}`,
        width: watch.size,
        height: watch.size,
        position: "relative",
      }}
    >
      <Hours currTime={currTime} />
      <Minutes currTime={currTime} />
      <Cover />
      <Titles />
    </div>
  );
};
