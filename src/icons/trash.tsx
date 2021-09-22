import React from "react";

function Trash(props: any) {
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
            d="M10.7071,2.29289 C11.0976,2.68342 11.0976,3.31658 10.7071,3.70711 L7.41421,7 L12.75,7 C16.7541,7 20,10.2459 20,14.25 C20,18.2541 16.7541,21.5 12.75,21.5 L6,21.5 C5.44772,21.5 5,21.0523 5,20.5 C5,19.9477 5.44772,19.5 6,19.5 L12.75,19.5 C15.6495,19.5 18,17.1495 18,14.25 C18,11.3505 15.6495,9 12.75,9 L7.41421,9 L10.7071,12.2929 C11.0976,12.6834 11.0976,13.3166 10.7071,13.7071 C10.3166,14.0976 9.68342,14.0976 9.29289,13.7071 L4.29289,8.70711 C3.90237,8.31658 3.90237,7.68342 4.29289,7.29289 L9.29289,2.29289 C9.68342,1.90237 10.3166,1.90237 10.7071,2.29289 Z"
            id="路径"
            fill="currentColor"
          ></path>
          <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
        </g>
      </g>
    </svg>
  );
}

Trash.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-trash-2",
};

export default Trash;
