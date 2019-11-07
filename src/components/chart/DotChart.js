import React, { useState } from "react";
import styled from "styled-components";
import { formatValues } from "./Chart";
import { getSvgX, getSvgY } from "./utils";

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
  size = { width: 100, height: 100, offsetWidth: 10, offsetHeight: 10 },
  values,
  maxValue,
  minValue = 0,
  dotRadius = 1,
  alternateColor,
  hoverColor,
  onClick = () => {}
}) => {
  const { width, height, offsetWidth, offsetHeight } = size;
  const [selected, setSelected] = useState(undefined);
  const formattedValues = formatValues(values);
  const relMaxValue = maxValue
    ? maxValue
    : Math.max(...formattedValues.map(value => value.y));
  return (
    <>
      <G data-setname="Our first data set">
        {formattedValues.map(value => (
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
        ))}
      </G>
    </>
  );
};

export default DotChart;
