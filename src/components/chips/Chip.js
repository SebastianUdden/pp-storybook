import React from "react";
import styled from "styled-components";
import SVG from "../svg/SVG";
import { check } from "../../svgs/navigation/check";
import Text from "../text/Text";

const Wrapper = styled.div`
  background-color: ${p => p.backgroundColor};
  color: ${p => p.foregroundColor};
  padding: 0.5rem 0.5rem;
  border-radius: 10rem;
  margin: 0.3rem;
  position: relative;
  :hover {
    background-color: ${p => p.backgroundColor}88;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  appearance: none;
  position: absolute;
  top: -4px;
  left: -2px;
  width: 101%;
  height: 101%;
  cursor: pointer;
  outline: none;
`;

const ChipText = styled(Text)`
  margin: 0 0.3rem;
`;

const Chip = ({
  backgroundColor = "#444444",
  alternateBackgroundColor = "#111111",
  foregroundColor = "#999999",
  onClick,
  selected,
  allowMultiple,
  customIcon,
  chip
}) => (
  <Wrapper
    backgroundColor={selected ? alternateBackgroundColor : backgroundColor}
    foregroundColor={foregroundColor}
  >
    <Label>
      {selected && allowMultiple && (
        <SVG {...check} size={18} color={foregroundColor} />
      )}
      {customIcon}
      <ChipText>{chip}</ChipText>
    </Label>
    <Input type="checkbox" value={chip} onClick={onClick} />
  </Wrapper>
);

export default Chip;
