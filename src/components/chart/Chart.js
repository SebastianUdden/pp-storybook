import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import Text from "../text/Text";
import DotChart from "./DotChart";
import LineChart from "./LineChart";
import ChartAxis from "./ChartAxis";
import TextValues from "./TextValues";

const Wrapper = styled.div`
  padding: 0%;
  margin: 0;
  color: ${p => p.color};
  width: ${p => p.width};
`;
const SVG = styled.svg`
  width: 100%;
  max-height: 100%;
`;
const H3 = styled.h3`
  margin: 0 0 1rem;
  padding: 0;
`;

export const formatValues = values =>
  values.length
    ? values
    : Object.keys(values).map((key, index) => ({
        title: key,
        x: index,
        y: values[key]
      }));

const FlexWrapper = styled.div`
  display: flex;
`;

const ChartContainer = ({ id, color, children }) => {
  return (
    <SVG id={id} fill={color} viewBox="0 0 100 100">
      {children}
    </SVG>
  );
};

const Chart = ({
  type,
  title,
  values = {},
  size,
  axisSize,
  color = "#ffffff",
  hoverColor = "#cccccc",
  alternateColor = "#000000",
  axisColor,
  width = "100%",
  maxBarWidth,
  minBarWidth,
  fillPercentage,
  hideAxis,
  dynamicChart,
  dotRadius,
  showTextValues,
  onClick
}) => {
  const formattedValues = formatValues(values);
  return (
    <Wrapper color={color} width={width}>
      {title && (
        <H3>
          <Text>{title}</Text>
        </H3>
      )}
      <FlexWrapper>
        {showTextValues && (
          <TextValues values={formattedValues} axisSize={axisSize || size} />
        )}
        <ChartContainer id="ChartContainer" color={color}>
          {!hideAxis && (
            <ChartAxis
              values={formattedValues}
              axisSize={axisSize || size}
              color={axisColor || color}
              dynamicChart={dynamicChart}
            />
          )}
          {type === "horizontal-bar" && (
            <BarChart
              size={size}
              values={formattedValues}
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
              size={size}
              values={formattedValues}
              hoverColor={hoverColor}
              alternateColor={alternateColor}
              maxBarWidth={maxBarWidth}
              minBarWidth={minBarWidth}
              onClick={onClick}
            />
          )}
          {type === "vertical-dot" && (
            <DotChart
              size={size}
              values={formattedValues}
              hoverColor={hoverColor}
              alternateColor={alternateColor}
              maxBarWidth={maxBarWidth}
              minBarWidth={minBarWidth}
              dotRadius={dotRadius}
              onClick={onClick}
            />
          )}
          {type === "vertical-line" && (
            <LineChart
              size={size}
              values={formattedValues}
              color={color}
              hoverColor={hoverColor}
              alternateColor={alternateColor}
              maxBarWidth={maxBarWidth}
              minBarWidth={minBarWidth}
              dotRadius={dotRadius}
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
      </FlexWrapper>
    </Wrapper>
  );
};

export default Chart;
