import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Text from "../text/Text";

const Wrapper = styled.div`
  padding: 0%;
  margin: 0;
  color: ${p => p.color};
  height: 100%;
`;
const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;
const H1 = styled.h1`
  margin: 0 0 1rem;
  padding: 0;
`;

const ChartContainer = ({ id, color, children }) => {
  return (
    <SVG id={id} fill={color}>
      {children}
    </SVG>
  );
};

const Chart = ({
  type,
  horizontal,
  title,
  values,
  color = "#ffffff",
  hoverColor = "#cccccc",
  alternateColor = "#000000",
  size,
  fillPercentage,
  onClick
}) => {
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const container = document.getElementById("ChartContainer");
    setChartSize({
      width: container.getBoundingClientRect().width,
      height: container.getBoundingClientRect().height
    });
  }, []);

  return (
    <Wrapper color={color} size={size}>
      {title && (
        <H1>
          <Text>{title}</Text>
        </H1>
      )}
      <ChartContainer id="ChartContainer" color={color}>
        {type === "bar" && (
          <BarChart
            chartSize={chartSize}
            values={values}
            hoverColor={hoverColor}
            alternateColor={alternateColor}
            horizontal={horizontal}
            onClick={onClick}
          />
        )}
        {type === "pie" && (
          <PieChart
            color={color}
            size={size}
            fillPercentage={fillPercentage}
            alternateColor={alternateColor}
          />
        )}
      </ChartContainer>
    </Wrapper>
  );
};

export default Chart;
