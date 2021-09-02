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
        <g
          id="标注工具栏+创建任务的四种方式"
          transform="translate(-720.000000, -11561.000000)"
        >
          <g id="编组-42" transform="translate(584.000000, 11553.000000)">
            <g id="编组-41" transform="translate(136.000000, 8.000000)">
              <g id="圆形备份-2">
                <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
              </g>
              <g
                id="编组-39"
                transform="translate(4.000000, 4.500000)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <line x1="0" y1="0.5" x2="16" y2="0.5" id="路径-19"></line>
                <line x1="8" y1="0.5" x2="8" y2="15.5" id="路径-19"></line>
              </g>
            </g>
          </g>
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
