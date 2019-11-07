import React, { useState } from "react";
import styled from "styled-components";
import { formatValues } from "./Chart";
import { makePath, getSvgY, getSvgX } from "./utils";

const G = styled.g``;
const Circle = styled.circle`
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

const Path = styled.path`
  stroke: ${p => p.color};
  stroke-width: 0.3;
  fill: none;
`;

const LineChart = ({
  size = { width: 100, height: 100, offsetWidth: 10, offsetHeight: 10 },
  values,
  maxValue,
  minValue,
  dotRadius = 1,
  color,
  alternateColor,
  hoverColor,
  onClick = () => {}
}) => {
  const { width, height, offsetWidth, offsetHeight } = size;
  const [selected, setSelected] = useState(undefined);
  const formattedValues = formatValues(values);
  return (
    <>
      <G data-setname="Our first data set">
        <Path color={color} d={makePath({ values, ...size })}></Path>
        {formattedValues.map(value => {
          return (
            <Circle
              key={`${value.x}-${value.y}`}
              cx={getSvgX(formattedValues, value.x, width, offsetWidth)}
              cy={getSvgY(values, value.y, height, offsetHeight)}
              data-value={value.y}
              r={dotRadius}
              alternateColor={alternateColor}
              hoverColor={hoverColor}
              selected={value.x === selected}
              onClick={() => {
                setSelected(value.x);
                onClick(value);
              }}
            ></Circle>
          );
        })}
      </G>
    </>
  );
};

export default LineChart;
