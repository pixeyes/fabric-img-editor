import React from "react";

const PageFill = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>新任务树备份 2@4x</title>
    <defs>
      <rect x="0" y="113" width="1920" height="967" id="rect-1"></rect>
      <path
        d="M0,0 L240,0 C244.418278,-8.11624501e-16 248,3.581722 248,8 L248,541 C248,545.418278 244.418278,549 240,549 L0,549 L0,549 L0,0 Z"
        id="path-2"
      ></path>
      <filter
        x="-14.1%"
        y="-4.6%"
        width="128.2%"
        height="112.8%"
        filterUnits="objectBoundingBox"
        id="filter-3"
      >
        <feOffset
          dx="0"
          dy="10"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="10"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.145098039   0 0 0 0 0.145098039   0 0 0 0 0.145098039  0 0 0 0.25 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="实现稿界面" transform="translate(-16.000000, -207.000000)">
        <g id="位图">
          <use fill="#F8F8F8" fillRule="evenodd" xlinkHref="#rect-1"></use>
        </g>
        <g id="新任务树备份-2" transform="translate(0.000000, 193.000000)">
          <g id="矩形">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-3)"
              xlinkHref="#path-2"
            ></use>
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-2"></use>
          </g>
          <path
            d="M0,0 L240,0 C244.418278,-8.11624501e-16 248,3.581722 248,8 L248,44 L248,44 L0,44 L0,0 Z"
            id="Rectangle"
            fill="#252525"
            opacity="0.900000036"
          ></path>
          <g
            id="编组-15"
            transform="translate(16.000000, 12.000000)"
            stroke="#FFFFFF"
          >
            <g id="商品详情页" transform="translate(0.000000, 2.000000)">
              <path
                d="M13,6 L13,13 C13,13.5522847 12.5522847,14 12,14 L4,14 C3.44771525,14 3,13.5522847 3,13 L3,3 C3,2.44771525 3.44771525,2 4,2 L8.91210938,2"
                id="路径"
              ></path>
              <path
                d="M9,2 L13,6 L10,6 C9.44771525,6 9,5.55228475 9,5 L9,2 L9,2 Z"
                id="矩形"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default PageFill;
