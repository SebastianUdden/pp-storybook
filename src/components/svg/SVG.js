import React from "react";

const SVG = ({ color, viewBox, path, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox={viewBox}
      fill={color || undefined}
    >
      {path}
    </svg>
  );
};

export default SVG;
