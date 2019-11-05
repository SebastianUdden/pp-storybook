import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import Text from "../text/Text";

const Wrapper = styled.div`
  padding: 0%;
  margin: 0;
  color: ${p => p.color};
  width: ${p => p.width};
`;
const SVG = styled.svg`
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;
const H3 = styled.h3`
  margin: 0 0 1rem;
  padding: 0;
`;

const ChartContainer = ({ id, color, children }) => {
  return (
    <SVG id={id} fill={color} viewBox="0 0 100 100">
      {children}
    </SVG>
  );
};

const DefaultIcon = ({}) => (
  <polygon fill="red" strokeWidth="0" points="0,50 100,50 50,0" />
);

const Chart = ({
  type,
  title,
  values,
  color = "#ffffff",
  hoverColor = "#cccccc",
  alternateColor = "#000000",
  width = "100%",
  maxBarWidth,
  minBarWidth,
  fillPercentage,
  onClick
}) => (
  <Wrapper color={color} width={width}>
    {title && (
      <H3>
        <Text>{title}</Text>
      </H3>
    )}
    <ChartContainer id="ChartContainer" color={color}>
      {type === "default-icon" && <DefaultIcon />}
      {type === "horizontal-bar" && (
        <BarChart
          values={values}
          hoverColor={hoverColor}
          alternateColor={alternateColor}
          maxBarWidth={maxBarWidth}
          minBarWidth={minBarWidth}
          onClick={onClick}
          horizontal
        />
      )}
      {type === "vertical-bar" && (
        <BarChart
          values={values}
          hoverColor={hoverColor}
          alternateColor={alternateColor}
          maxBarWidth={maxBarWidth}
          minBarWidth={minBarWidth}
          onClick={onClick}
        />
      )}
      {type === "pie" && (
        <PieChart
          color={color}
          fillPercentage={fillPercentage}
          alternateColor={alternateColor}
        />
      )}
      {type === "donut" && (
        <DonutChart
          color={color}
          fillPercentage={fillPercentage}
          alternateColor={alternateColor}
        />
      )}
    </ChartContainer>
  </Wrapper>
);

export default Chart;
