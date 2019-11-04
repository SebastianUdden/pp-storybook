import React from "react";
import styled from "styled-components";

const Circle = styled.circle`
  fill: ${p => p.color};
  transform: rotate(-90deg);
`;

const PieCircle = styled(Circle)`
  fill: transparent;
  stroke: ${p => p.color};
  stroke-width: 80;
  stroke-dasharray: ${p => `calc(${p.fillPercentage} * 251.36 / 100) 251.36`};
  transition: stroke-dasharray 0.5s ease;
  transform: rotate(-90deg);
`;

const PieChart = ({
  fillPercentage = 10,
  color = "#000000",
  alternateColor = "#ffffff"
}) => {
  return (
    <>
      <Circle r="80" cx="-80" cy="80" color={color} />
      <PieCircle
        r="40"
        cx="-80"
        cy="80"
        color={alternateColor}
        fillPercentage={fillPercentage}
      />
    </>
  );
};

export default PieChart;
