import React from "react";

function Pen(props: any) {
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
        <g
          id="标注工具栏+创建任务的四种方式"
          transform="translate(-680.000000, -11561.000000)"
          strokeWidth="2"
        >
          <g id="编组-42" transform="translate(584.000000, 11553.000000)">
            <g id="编辑_normal" transform="translate(96.000000, 8.000000)">
              <rect
                id="Rectangle"
                stroke="#979797"
                fill="#D8D8D8"
                opacity="0"
                x="1"
                y="1"
                width="22"
                height="22"
              ></rect>
              <path
                d="M18,4.17157288 C18.4679353,4.17157288 18.9358706,4.35008418 19.2928932,4.70710678 C19.6499158,5.06412939 19.8284271,5.53206469 19.8284271,6 C19.8284271,6.46793531 19.6499158,6.93587061 19.2928932,7.29289322 L19.2928932,7.29289322 L6.58578644,20 L4,20 L4,17.4142136 L16.7071068,4.70710678 C17.0641294,4.35008418 17.5320647,4.17157288 18,4.17157288 Z"
                id="Path-6"
                stroke="currentColor"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Pen.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-edit-2",
};

export default Pen;
