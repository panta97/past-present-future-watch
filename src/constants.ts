const watch = {
  size: 380,
  arcSize: 15,
  arcColor: "#3A3A3A",
  bgColor: "#2F2F2D",
  coverColor: "#0D0D0D",
  sliceColor: "#f1eded",
  hourFontsize: "2em",
  minuteFontsize: "1em",
  minHourColor: "#fff",
  pastfutureFontsize: "1.2em",
  presentFontsize: "1.2em",
  accentColor: "#b8ff49",
  paleColor: "#8B8B8B",
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
  // milliseconds in a minute
  millInAMin: 6e4,
};

export default watch;
