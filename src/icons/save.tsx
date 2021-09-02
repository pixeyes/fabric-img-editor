import React from "react";

function Save({ className }: any) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Rectangle@4x</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="标注工具栏+创建任务的四种方式"
          transform="translate(-2423.000000, -6737.000000)"
          strokeWidth="2"
        >
          <g id="编组-42" transform="translate(2141.000000, 6729.000000)">
            <g id="Group-2" transform="translate(282.000000, 8.000000)">
              <rect
                id="Rectangle"
                stroke="#145AFF"
                fillOpacity="0.46"
                fill="#158AFF"
                fillRule="nonzero"
                opacity="0"
                x="1"
                y="1"
                width="22"
                height="22"
              ></rect>
              <polyline
                id="Path"
                stroke="#00A34F"
                strokeLinecap="round"
                points="20.64 6 9.84 16.8 3.36 10.32"
              ></polyline>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Save.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-save",
};

export default Save;
