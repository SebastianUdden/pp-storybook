import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  transform: rotate(55deg);
  width: ${p => p.width};
  cursor: ${p => (p.fixedAmount ? "default" : "pointer")};
  :hover {
    opacity: ${p => (p.fixedAmount ? 1 : 0.5)};
  }
`;

const calcStarPoints = (
  centerX,
  centerY,
  innerCirclePoints,
  innerRadius,
  outerRadius
) => {
  const angle = Math.PI / innerCirclePoints;
  const angleOffsetToCenterStar = 0;

  const totalPoints = innerCirclePoints * 2; // 10 in a 5-points star
  let points = "";

  for (let i = 0; i < totalPoints; i++) {
    let isEvenIndex = i % 2 == 0;
    let r = isEvenIndex ? outerRadius : innerRadius;
    let currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
    let currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
    points += currX + "," + currY + " ";
  }
  return points;
};

const getAdjustedPercentage = (high, low, ratio) => (high - low) * ratio + low;

const Star = ({
  id,
  color,
  remainderRatio,
  width,
  height,
  onClick,
  fixedAmount
}) => {
  const fill = getAdjustedPercentage(70, 30, remainderRatio);
  const getStarPoints = (width, height) => {
    let centerX = width / 2; // e.g 100
    let centerY = height / 2; // e.g 100

    let innerCirclePoints = 5; // a 5 point star

    // width --> this is the beam length of each
    // side of the SVG square that holds the star
    let innerRadius = width / innerCirclePoints;
    let innerOuterRadiusRatio = 2.5; // outter circle is x2 the inner
    let outerRadius = innerRadius * innerOuterRadiusRatio;

    return calcStarPoints(
      centerX,
      centerY,
      innerCirclePoints,
      innerRadius,
      outerRadius
    );
  };

  return (
    <Svg
      viewBox="0 0 24 24"
      width={width}
      onClick={onClick}
      fixedAmount={fixedAmount}
    >
      <defs>
        <linearGradient
          id={id}
          gradientTransform="rotate(-55)"
          x1="-130%"
          y1="0"
        >
          <stop stop-color={color} offset={`${fill}%`} />
          <stop stop-color="grey" offset="0%" />
          <stop stop-color="grey" stop-opacity="0" offset="0%" />
        </linearGradient>
      </defs>
      <polygon
        points={getStarPoints(width, height)}
        fill={`url(#${id})`}
        style={{ fillRule: "nonzero" }}
      />
    </Svg>
  );
};

export default Star;
