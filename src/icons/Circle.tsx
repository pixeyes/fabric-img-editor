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
        <g id="编组" fill="currentColor">
          <path
            d="M2.18181818,12 C2.18181818,17.4224727 6.57757091,21.8181818 12,21.8181818 C17.4224727,21.8181818 21.8181818,17.4224727 21.8181818,12 C21.8181818,6.57757091 17.4224727,2.18181818 12,2.18181818 C6.57757091,2.18181818 2.18181818,6.57757091 2.18181818,12 Z M12,0 C5.37258545,0 0,5.37258545 0,12 C0,18.6273818 5.37258545,24 12,24 C18.6273818,24 24,18.6273818 24,12 C24,5.37258545 18.6273818,0 12,0 Z"
            id="形状"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Circle;
