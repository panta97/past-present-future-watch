import watch from "../constants";
import { Cover } from "./Cover";
import { Hours } from "./Hours";
import { Minutes } from "./Minutes";
import { Titles } from "./Titles";

interface WatchProps {}

export const Watch = ({}: WatchProps) => {
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
      <Hours />
      <Minutes />
      <Cover />
      <Titles />
    </div>
  );
};
