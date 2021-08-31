import React from "react";;

function Maximize(props: any) {
  return React.createElement("svg", props, [
    React.createElement("polyline", { points: "15 3 21 3 21 9", key: 0 }),
    React.createElement("polyline", { points: "9 21 3 21 3 15", key: 1 }),
    React.createElement("line", { x1: "21", y1: "3", x2: "14", y2: "10", key: 2 }),
    React.createElement("line", { x1: "3", y1: "21", x2: "10", y2: "14", key: 3 }),
  ]);
}

Maximize.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#4a90e2",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-maximize-2",
};

export default Maximize;
