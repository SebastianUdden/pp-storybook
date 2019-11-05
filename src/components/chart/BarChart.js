import React, { useState } from "react";
import styled from "styled-components";
import { getRelativePosition } from "../../utils/math";
import { formatValues } from "./Chart";

const G = styled.g`
  fill: ${p => (p.selected ? p.alternateColor : "inherit")};
  cursor: pointer;
  :hover {
    fill: ${p => (p.selected ? `${p.alternateColor}88` : p.hoverColor)};
  }
  :focus,
  :active {
    fill: ${p => (p.selected ? `${p.alternateColor}44` : "inherit")};
  }
`;
const Rect = styled.rect`
  transition: width 0.3s ease;
`;
const Text = styled.text`
  user-select: none;
  font-size: ${p => p.fontSize}px;
  overflow: scroll;
`;

const getBarWidth = (max, min, count, total) => {
  const width = (total - 2) / count;
  if (max && width > max) {
    return max;
  } else if (min && width < min) {
    return min;
  }
  return width;
};

const BarChart = ({
  chartSize = { width: 100, height: 100 },
  values = {},
  horizontal,
  textRight = true,
  hoverColor,
  alternateColor,
  fontSize = 2,
  maxValue,
  minValue = 0,
  maxBarWidth,
  minBarWidth,
  onClick = () => {}
}) => {
  const [selected, setSelected] = useState(undefined);
  const formattedValues = formatValues(values);
  const relMaxValue = maxValue
    ? maxValue
    : Math.max(...formattedValues.map(value => value.y));
  return formattedValues.map((value, index) => {
    if (horizontal) {
      const maxHorizontalWidth = 0.8;
      const barWidth = getBarWidth(
        maxBarWidth,
        minBarWidth,
        formattedValues.length,
        chartSize.height
      );
      const barHeight = getRelativePosition(value.y, minValue, relMaxValue);
      return barWidth ? (
        <G
          key={value.id}
          hoverColor={hoverColor}
          alternateColor={alternateColor}
          selected={value.x === selected}
          onClick={() => {
            setSelected(value.x);
            onClick(value);
          }}
        >
          <Rect
            width={chartSize.width * barHeight * maxHorizontalWidth}
            height={barWidth - 1}
            y={barWidth * index + 1}
            x={textRight ? 0 : 100}
          ></Rect>
          <Text
            x={
              textRight
                ? chartSize.width * barHeight * maxHorizontalWidth + 3
                : 0
            }
            y={barWidth * index + barWidth * 0.5 + 1}
            fontSize={fontSize}
          >
            {value.x}
          </Text>
        </G>
      ) : null;
    } else {
      const barWidth = chartSize.width / formattedValues.length;
      const barHeight = getRelativePosition(value.y, minValue, relMaxValue);
      return barWidth ? (
        <G
          key={value.id}
          hoverColor={hoverColor}
          alternateColor={alternateColor}
          selected={value.x === selected}
          onClick={() => {
            setSelected(value.x);
            onClick(value);
          }}
        >
          <rect
            width={barWidth - 1}
            height={chartSize.height * barHeight}
            x={barWidth * index}
            y={chartSize.height - chartSize.height * barHeight - 10}
          ></rect>
          <Text
            x={barWidth * index}
            y={chartSize.height - 5}
            fontSize={fontSize}
          >
            {value.x}
          </Text>
        </G>
      ) : null;
    }
  });
};

export default BarChart;
