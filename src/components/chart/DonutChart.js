import React from "react";
import styled from "styled-components";

const Donut = styled.circle`
  fill: none;
  stroke: ${p => p.color};
  stroke-width: 12;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
// 2 * π * R  = C
// 2 * π * 40 ≈ 251.327
const DonutFill = styled.circle`
  fill: none;
  stroke: ${p => p.color};
  stroke-width: 12;
  stroke-dasharray: 276.46;
  stroke-dashoffset: ${p => `calc(276.46 * (1 - ${p.fillPercentage / 100}))`};
  transition: stroke-dashoffset 0.3s ease;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const DonutChart = ({ fillPercentage = 50, color, alternateColor }) => (
  <>
    <Donut cx="50" cy="50" r="44" color={color} />
    <DonutFill
      cx="50"
      cy="50"
      r="44"
      fillPercentage={fillPercentage}
      color={alternateColor}
    />
  </>
);

export default DonutChart;
