import React from "react";
import styled from "styled-components";
import { getMinX, getMaxX, getMinY, getMaxY, getSvgX, getSvgY } from "./utils";

const G = styled.g``;
const Line = styled.line`
  stroke: ${p => p.color};
  stroke-width: 1;
  fill: none;
`;
const Text = styled.text`
  user-select: none;
  font-size: ${p => p.fontSize}px;
  overflow: scroll;
`;

const ChartAxis = ({
  axisSize = {
    width: 100,
    height: 100,
    offsetWidth: 5,
    offsetHeight: 5
  },
  values = [],
  dynamicChart,
  fontSize = 3,
  color = "red"
}) => {
  const { width, height, offsetWidth: ow, offsetHeight: oh } = axisSize;
  const offsetWidth = ow / 2;
  const offsetHeight = oh / 2;
  const minX = dynamicChart ? getMinX(values) : 0;
  const maxX = dynamicChart ? getMaxX(values) : 100;
  const minY = 0;
  const maxY = dynamicChart ? getMaxY(values) : 100;
  return (
    <G>
      {/* <Text
        x={getSvgX(values, minX, width, offsetWidth) - 6}
        y={minY + 4}
        fontSize={fontSize}
      >
        {maxY}
      </Text>
      <Text
        x={getSvgX(values, minX, width, offsetWidth) - 3}
        y={maxY - 2}
        fontSize={fontSize}
      >
        {minY}
      </Text> */}
      <Line
        color={color}
        x1={getSvgX(values, minX, width, offsetWidth) - 0.5}
        y1={getSvgY(values, minY, height, offsetHeight)}
        x2={getSvgX(values, maxX, width, offsetWidth)}
        y2={getSvgY(values, minY, height, offsetHeight)}
      />
      <Line
        color={color}
        x1={getSvgX(values, minX, width, offsetWidth)}
        y1={getSvgY(values, minY, height, offsetHeight)}
        x2={getSvgX(values, minX, width, offsetWidth)}
        y2={getSvgY(values, maxY, height, offsetHeight)}
      />
    </G>
  );
};

export default ChartAxis;
