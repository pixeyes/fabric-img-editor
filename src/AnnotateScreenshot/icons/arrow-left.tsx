import React from "react";

function ArrowLeft(props:any) {
  return React.createElement("svg", props, [
    React.createElement("line", {
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12",
      key: 0,
    }),
    React.createElement("polyline", { points: "12 19 5 12 12 5", key: 1 }),
  ]);
}

ArrowLeft.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-arrow-left",
};

export default ArrowLeft;
