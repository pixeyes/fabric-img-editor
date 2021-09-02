import React from "react";

function Trash(props: any) {
  return (
    <svg
      width="25px"
      height="24px"
      viewBox="0 0 25 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
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
          transform="translate(-785.000000, -11561.000000)"
          strokeWidth="2"
        >
          <g id="编组-42" transform="translate(584.000000, 11553.000000)">
            <g id="编组-40" transform="translate(201.000000, 8.000000)">
              <rect
                id="Rectangle"
                stroke="#FF0000"
                fillOpacity="0.48"
                fill="#FF5050"
                opacity="0"
                x="1.59667969"
                y="1"
                width="22"
                height="22"
              />
              <path
                d="M5.07691956,10 L16.430013,10 C18.7311995,10 20.5966797,12.0147186 20.5966797,14.5 C20.5966797,16.9852814 18.7311995,19 16.430013,19 L7.59667969,19"
                id="路径"
                stroke="#FFFFFF"
                strokeLinecap="round"
              />
              <line
                x1="5"
                y1="10.0071716"
                x2="10.5966797"
                y2="5"
                id="路径-3"
                stroke="#FFFFFF"
                strokeLinecap="round"
              />
            </g>
          </g>
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
