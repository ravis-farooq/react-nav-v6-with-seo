import React from "react";

const Loader = () => {
  return (
    <div className="flex">
      <svg viewBox="0 0 100 100">
        <foreignObject class="logoBack" x="0" y="0" width="100" height="100">
          <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>

        <g class="logoBlend">
          <rect x="0" y="0" width="100" height="100" />
          <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
