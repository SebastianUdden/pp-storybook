import React from "react";
import styled from "styled-components";
import { getMaxY } from "./utils";
import { getNumberWithSpaces } from "../../utils/numberParsers";

const TextValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  padding-top: ${p => p.verticalPadding}px;
  padding-bottom: ${p => p.verticalPadding}px;
  font-size: small;
`;
const High = styled.span`
  white-space: nowrap;
`;
const Mid = styled.span``;
const Low = styled.span``;

const TextValues = ({
  values,
  axisSize = {
    width: 100,
    height: 100,
    offsetWidth: 5,
    offsetHeight: 5
  }
}) => {
  const minY = 0;
  const maxY = getMaxY(values);
  const textValues = [maxY * 0.75, maxY * 0.5, maxY * 0.25];
  return (
    <TextValuesWrapper verticalPadding={axisSize.offsetHeight}>
      <High>{getNumberWithSpaces(maxY.toString())}</High>
      {textValues.map(textValue => (
        <Mid>{getNumberWithSpaces(textValue.toString())}</Mid>
      ))}
      <Low>{getNumberWithSpaces(minY.toString())}</Low>
    </TextValuesWrapper>
  );
};

export default TextValues;
