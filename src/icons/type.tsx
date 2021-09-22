import React from "react";

function Type(props: any) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="编组">
          <path
            d="M10.8,4.4 L2.5,4.4 C2.22386,4.4 2,4.17614 2,3.9 L2,2.5 C2,2.22386 2.22386,2 2.5,2 L21.5,2 C21.7761,2 22,2.22386 22,2.5 L22,3.9 C22,4.17614 21.7761,4.4 21.5,4.4 L13.2,4.4 L13.2,20.69995 C13.2,20.97615 12.9761,21.19995 12.7,21.19995 L11.3,21.19995 C11.0239,21.19995 10.8,20.97615 10.8,20.69995 L10.8,4.4 Z"
            id="路径"
            fill="currentColor"
          ></path>
          <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
        </g>
      </g>
    </svg>
  );
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
