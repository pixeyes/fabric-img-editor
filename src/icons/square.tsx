import React from "react";

function Square(props: any) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4H4V20H20V4ZM2 2V22H22V2H2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Square;
