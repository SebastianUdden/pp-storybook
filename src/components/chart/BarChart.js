import React, { useState } from "react";
import styled from "styled-components";
import { getRelativePosition } from "../../utils/math";

const G = styled.g`
  fill: ${p => (p.selected ? p.alternateColor : "inherit")};
  cursor: pointer;
  :hover {
    fill: ${p => (p.selected ? `${p.alternateColor}88` : p.hoverColor)};
  }
  :focus,
  :active {
    fill: inherit;
  }
`;
const Text = styled.text`
  user-select: none;
`;

const BarChart = ({
  chartSize,
  values,
  horizontal,
  textRight = true,
  hoverColor,
  alternateColor,
  onClick = () => {}
}) => {
  const [selected, setSelected] = useState(undefined);
  const maxWidth = 0.6;
  const minValue = 0;
  const maxValue = 100;
  return values.map((value, index) => {
    if (horizontal) {
      const barWidth = chartSize.height / values.length;
      const barHeight = getRelativePosition(value.y, minValue, maxValue);
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
            width={chartSize.width * barHeight * maxWidth}
            height={barWidth - 5}
            y={barWidth * index}
            x={textRight ? 0 : 100}
          ></rect>
          <Text
            x={textRight ? chartSize.width * barHeight * maxWidth + 6 : 0}
            y={barWidth * index + 12}
            dy=".35em"
          >
            {value.y} - {value.x}
          </Text>
        </G>
      ) : null;
    } else {
      const barWidth = chartSize.width / values.length;
      const barHeight = getRelativePosition(value.y, minValue, maxValue);
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
            width={barWidth - 5}
            height={chartSize.height * barHeight}
            x={barWidth * index}
            y={chartSize.height - chartSize.height * barHeight - 22}
          ></rect>
          <Text x={barWidth * index} y={chartSize.height - 12} dy=".35em">
            {value.y} - {value.x}
          </Text>
        </G>
      ) : null;
    }
  });
};

export default BarChart;
