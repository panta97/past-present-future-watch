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
  let start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0
  ).getTime();
  const [currTime, setCurrTime] = useState<number>(0);
  // state is set to true to show transition at the start
  const [showTransition, setShowTransition] = useState<boolean>(true);
  useEffect(() => {
    const tick = () => {
      setTimeout(() => {
        setCurrTime(new Date().getTime() - start);
        requestAnimationFrame(tick);
      }, 1000 / 1);
    };
    tick();
  }, [start]);

  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      setShowTransition(true);
    } else {
      setShowTransition(false);
    }
  };

  const removeTransitionDelayed = () => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2000);
  };

  // after first rendering remove transition property
  // to avoid bad animation transition
  useEffect(() => {
    if (showTransition) removeTransitionDelayed();
  }, [showTransition]);

  useEffect(() => {
    // remove transition of first rendering same as above useEffect
    removeTransitionDelayed();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
      <Hours currTime={currTime} showTransition={showTransition} />
      <Minutes currTime={currTime} showTransition={showTransition} />
      <Cover />
      <Titles />
    </div>
  );
};
