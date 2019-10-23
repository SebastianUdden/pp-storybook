import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
  border-radius: ${p => (p.rounded ? 34 : 0)}px;

  :before {
    border-radius: ${p => (p.rounded ? 50 : 0)}%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: ${p => (p.checked ? "translateX(26px)" : "translateX(0)")};
  }
`;

const ToggleSwitch = ({
  checked,
  onClick,
  rounded = true,
  backgroundColor = "#2196f3"
}) => (
  <Box>
    <CheckBox type="checkbox" onClick={onClick} />
    <Slider
      checked={checked}
      rounded={rounded}
      backgroundColor={backgroundColor}
    />
  </Box>
);

export default ToggleSwitch;
