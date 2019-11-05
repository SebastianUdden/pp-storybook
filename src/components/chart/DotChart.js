import React, { useState } from "react";
import styled from "styled-components";
import { formatValues } from "./Chart";
import { getRelativePosition } from "../../utils/math";

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

const DotChart = ({
  chartSize = { width: 100, height: 100 },
  values,
  maxValue,
  minValue = 0,
  size = 3,
  alternateColor,
  hoverColor,
  onClick = () => {}
}) => {
  const [selected, setSelected] = useState(undefined);
  const formattedValues = formatValues(values);
  const relMaxValue = maxValue
    ? maxValue
    : Math.max(...formattedValues.map(value => value.y));
  return (
    <>
      <G data-setname="Our first data set">
        {formattedValues.map((value, index) => {
          const dotPosition = getRelativePosition(
            value.y,
            minValue,
            relMaxValue
          );
          return (
            <Circle
              cx={100 * ((index + 1) / formattedValues.length) - 10}
              cy={100 - 100 * dotPosition * 0.9 - 5}
              data-value={value.y}
              r={size}
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

export default DotChart;
