const watch = {
  size: 400,
  arcSize: 10,
  arcColor: "#675f56",
  bgColor: "#f1eded",
  coverColor: "#fff",
  sliceColor: "#f1eded",
  hourFontsize: "2em",
  minuteFontsize: "1em",
  pastfutureFontsize: "1.2em",
  presentFontsize: "1.2em",
  accentColor: "red",
  paleColor: "#ccc",
  // calculation props
  // 0 < x <= 1
  innerHourLen: 0.9,
  innerMinuteLen: 0.7,

  // cover
  innerCoverRad: 0.6,

  // showing angle
  showingAngle: Math.PI / 7.5,
  // milliseconds in a day
  millInADay: 8.64e7,
};

export default watch;
