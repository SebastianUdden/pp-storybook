import React from "react";
import styled from "styled-components";

const Pie = styled.circle`
  fill: ${p => p.color};
  stroke: ${p => p.color};
  stroke-width: 0;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
// 2 * π * R  = C
// 2 * π * 40 ≈ 251.327
const PieFill = styled.circle`
  fill: none;
  stroke: ${p => p.color};
  stroke-width: 50;
  stroke-dasharray: 157.07;
  stroke-dashoffset: ${p => p.fillOffset}px;
  transition: stroke-dashoffset 0.3s ease;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const PieChart = ({
  fillPercentage = 50,
  color = "#000000",
  alternateColor = "#ffffff"
}) => (
  <>
    <Pie cx="50" cy="50" r="50" color={color} />
    <PieFill
      cx="50"
      cy="50"
      r="25"
      fillOffset={157.07 * (1 - fillPercentage / 100)}
      color={alternateColor}
    />
  </>
);

export default PieChart;
