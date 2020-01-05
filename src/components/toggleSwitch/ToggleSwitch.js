import React from "react";
import styled from "styled-components";

const Box = styled.label`
  margin-left: 5px;
  position: relative;
  display: inline-block;
  width: ${p => p.size * 1.764}px;
  height: ${p => p.size}px;
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked {
    background-color: #2196f3;
  }
  :focus {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p => (p.checked ? p.backgroundColor : "#ccc")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${p => (p.rounded ? p.size : 0)}px;

  :before {
    border-radius: ${p => (p.rounded ? 50 : 0)}%;
    position: absolute;
    content: "";
    height: ${p => p.size * 0.764}px;
    width: ${p => p.size * 0.764}px;
    left: ${p => p.size * 0.117}px;
    bottom: ${p => p.size * 0.1}px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: ${p =>
      p.checked ? `translateX(${p.size * 0.764}px)` : "translateX(0)"};
  }
`;

const ToggleSwitch = ({
  checked,
  onClick,
  size = 34,
  rounded = true,
  backgroundColor = "#2196f3"
}) => (
  <Box size={size}>
    <CheckBox type="checkbox" onClick={onClick} />
    <Slider
      size={size}
      checked={checked}
      rounded={rounded}
      backgroundColor={backgroundColor}
    />
  </Box>
);

export default ToggleSwitch;
