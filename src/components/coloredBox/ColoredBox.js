import React from "react";
import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";

const Box = styled.div`
  font-family: ${DEFAULT_FONT.family};
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  height: ${p => p.size};
  min-width: ${p => p.size};
  box-shadow: ${p => p.boxShadow};
  opacity: ${p => p.opacity};
`;

const ColoredBox = ({
  color = "#222222",
  backgroundColor = "#ccccccc",
  boxShadow = "none",
  size = "10rem",
  opacity = 1,
  children
}) => (
  <Box
    color={color}
    backgroundColor={backgroundColor}
    boxShadow={boxShadow}
    size={size}
    opacity={opacity}
  >
    {children}
  </Box>
);

export default ColoredBox;
