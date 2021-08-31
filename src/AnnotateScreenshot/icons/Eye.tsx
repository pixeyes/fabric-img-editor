import * as React from "react";
interface Props {
  onClick: any;
}
const Eye: React.FC<Props> = ({ onClick }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <title>路径@4x</title>
      <g
        id="页面-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="一期交互调整内容清单（0714）"
          transform="translate(-1069.000000, -3808.000000)"
        >
          <g id="编组-4备份-2" transform="translate(983.000000, 3733.000000)">
            <g
              id="icon_Hidden-annotation"
              transform="translate(86.000000, 75.000000)"
            >
              <path
                d="M23,1 L23,23 L1,23 L1,1 L23,1 Z"
                id="路径"
                stroke="#FF0000"
                strokeWidth="2"
                fillOpacity="0.48"
                fill="#FF5050"
                opacity="0"
              ></path>
              <path
                d="M12,4 C18.0751322,4 23,7.581722 23,12 C23,16.418278 18.0751322,20 12,20 C5.92486775,20 1,16.418278 1,12 C1,7.581722 5.92486775,4 12,4 Z M12,6 C6.91702459,6 3,8.84874516 3,12 C3,15.1512548 6.91702459,18 12,18 C17.0829754,18 21,15.1512548 21,12 C21,8.84874516 17.0829754,6 12,6 Z M12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 Z"
                id="Combined-Shape"
                fill="#FFFFFF"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Eye;
