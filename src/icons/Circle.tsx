import * as React from "react";

interface CircleProps {
  className?: string;
}

const Circle: React.FC<CircleProps> = (props) => {
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
          transform="translate(-640.000000, -11561.000000)"
        >
          <g id="编组-42" transform="translate(584.000000, 11553.000000)">
            <g id="圆形" transform="translate(56.000000, 8.000000)">
              <rect id="矩形" x="0" y="0" width="24" height="24"/>
              <rect
                id="矩形"
                stroke="currentColor"
                strokeWidth="2"
                x="4"
                y="4"
                width="16"
                height="16"
                rx="8"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Circle;
