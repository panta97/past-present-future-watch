import watch from "../constants";
// as = angles
const as = [
  (3 * Math.PI) / 2 + watch.showingAngle,
  0,
  Math.PI,
  (3 * Math.PI) / 2 - watch.showingAngle,
];
// rad = radius
const rad = watch.size / 2;
enum Coord {
  X,
  Y,
}

export const Cover = () => {
  const getAngle = (angle: number, coord: Coord): number => {
    let pos = 0;
    if (coord === Coord.X) {
      pos = watch.size / 2 + (watch.size / 2) * Math.cos(angle);
    }
    if (coord === Coord.Y) {
      pos = watch.size / 2 + (watch.size / 2) * Math.sin(angle);
    }
    return pos;
  };

  return (
    <div
      style={{
        width: `${watch.size}`,
        height: `${watch.size}`,
        position: "absolute",
      }}
    >
      <svg
        style={{
          width: `${watch.size}`,
          height: `${watch.size}`,
        }}
      >
        <path
          style={{ fill: `${watch.coverColor}` }}
          d={`M${rad},${rad} L${getAngle(as[0], Coord.X)},${getAngle(
            as[0],
            Coord.Y
          )} A${rad},${rad} 1 0,1 ${getAngle(as[1], Coord.X)},${getAngle(
            as[1],
            Coord.Y
          )} z`}
        ></path>
        <path
          style={{ fill: `${watch.coverColor}` }}
          d={`M${rad},${rad} L${getAngle(as[2], Coord.X)},${getAngle(
            as[2],
            Coord.Y
          )} A${rad},${rad} 1 0,0 ${getAngle(as[1], Coord.X)},${getAngle(
            as[1],
            Coord.Y
          )} z`}
        ></path>
        <path
          style={{ fill: `${watch.coverColor}` }}
          d={`M${rad},${rad} L${getAngle(as[2], Coord.X)},${getAngle(
            as[2],
            Coord.Y
          )} A${rad},${rad} 1 0,1 ${getAngle(as[3], Coord.X)},${getAngle(
            as[3],
            Coord.Y
          )} z`}
        ></path>
      </svg>
      <div
        style={{
          width: `${watch.size * watch.innerCoverRad}px`,
          height: `${watch.size * watch.innerCoverRad}px`,
          borderRadius: "50%",
          backgroundColor: `${watch.coverColor}`,
          position: "absolute",
          top: `${watch.size / 2 - (watch.size * watch.innerCoverRad) / 2}px`,
          left: `${watch.size / 2 - (watch.size * watch.innerCoverRad) / 2}px`,
        }}
      ></div>
    </div>
  );
};
