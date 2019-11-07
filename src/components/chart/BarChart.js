import React, { useState } from "react";
import styled from "styled-components";
import { getRelativePosition } from "../../utils/math";
import { getSvgX, getSvgY } from "./utils";

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

const getBarWidth = (max, min, count, total, offset) => {
  const width = (total - offset) / count;
  if (max && width > max) {
    return max;
  } else if (min && width < min) {
    return min;
  }
  return width;
};

const BarChart = ({
  size = { width: 100, height: 100, offsetWidth: 10, offsetHeight: 10 },
  values,
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
  const { width, height, offsetWidth, offsetHeight } = size;
  const [selected, setSelected] = useState(undefined);
  const relMaxValue = maxValue
    ? maxValue
    : Math.max(...values.map(value => value.y));
  return values.map((value, index) => {
    if (horizontal) {
      const maxHorizontalWidth = 0.7;
      // const barWidth = getBarWidth(maxBarWidth, minBarWidth, values.length, width, offsetWidth)
      const barWidth = (width - offsetWidth) / values.length;
      const barHeight = getRelativePosition(value.y, minValue, relMaxValue);
      return barWidth ? (
        <G
          key={`${value.x}-${value.y}`}
          hoverColor={hoverColor}
          alternateColor={alternateColor}
          selected={value.x === selected}
          onClick={() => {
            setSelected(value.x);
            onClick(value);
          }}
        >
          <Rect
            width={width * barHeight * maxHorizontalWidth}
            height={barWidth - 1}
            y={barWidth * index + 1 + offsetHeight * 0.5}
            x={textRight ? 0 + offsetWidth * 0.5 : 100}
          ></Rect>
          <Text
            x={
              textRight
                ? width * barHeight * maxHorizontalWidth + 3 + offsetWidth * 0.5
                : 0
            }
            y={barWidth * index + barWidth * 0.5 + 1 + offsetHeight * 0.5}
            fontSize={fontSize}
          >
            {value.title}
          </Text>
        </G>
      ) : null;
    } else {
      const barWidth = (width - offsetWidth * 5) / values.length;
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
            height={height * barHeight - offsetHeight * 1.55}
            x={
              getSvgX(values, value.x, width, offsetWidth * 1.5) -
              offsetWidth * 0.5
            }
            y={height - height * barHeight + offsetHeight}
          ></rect>
          <Text
            x={
              getSvgX(values, value.x, width, offsetWidth * 1.5) -
              offsetWidth * 0.5
            }
            y={height - offsetHeight * 0.2}
            fontSize={fontSize}
          >
            {value.title}
          </Text>
        </G>
      ) : null;
    }
  });
};

export default BarChart;
