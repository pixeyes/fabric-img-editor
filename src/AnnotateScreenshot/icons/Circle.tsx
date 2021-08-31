import * as React from "react";

interface CircleProps {
  className?:string
}

const Circle: React.FC<CircleProps> = ({className}) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>分组 31@4x</title>
      <g
        id="页面-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="标注工具栏+创建任务的四种方式"
          transform="translate(-2200.000000, -7435.000000)"
        >
          <g id="编组-42" transform="translate(2141.000000, 7424.000000)">
            <g id="圆形" transform="translate(56.000000, 8.000000)">
              <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
              <rect
                id="矩形"
                stroke="currentColor"
                stroke-width="2"
                x="4"
                y="4"
                width="20"
                height="20"
                rx="10"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Circle;
