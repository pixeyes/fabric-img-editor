import React from "react";

function Type(props: any) {
  return React.createElement("svg", props, [
    React.createElement("polyline", {
      points: "4 7 4 4 20 4 20 7",
      key: 0,
    }),
    React.createElement("line", {
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20",
      key: 1,
    }),
    React.createElement("line", { x1: "12", y1: "4", x2: "12", y2: "20", key: 2 }),
  ]);
}

Type.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-type",
};

export default Type;
