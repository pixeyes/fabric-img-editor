import React from "react";

function ArrowLeft(props: any) {
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
            d="M2.29909188,21.6008583 C1.90030271,21.2020995 1.90030271,20.5555078 2.29909188,20.156749 L16.5491086,5.90669248 L15.0049277,4.36251055 L22,2 L19.6374705,8.99505636 L18.0932896,7.45087442 L3.84327283,21.7009309 C3.44448366,22.0996897 2.7979332,22.0996897 2.39914402,21.7009309 L2.29909188,21.6008583 Z"
            id="路径"
            fill="currentColor"
          ></path>
          <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
        </g>
      </g>
    </svg>
  );
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
