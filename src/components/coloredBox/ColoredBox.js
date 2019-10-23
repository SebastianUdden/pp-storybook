import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  padding: 1rem;
  font-size: x-large;
  justify-content: center;
  align-items: center;
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  height: ${p => p.size};
  min-width: ${p => p.size};
  box-shadow: ${p => p.boxShadow};
`;

const ColoredBox = ({
  color = "#222222",
  backgroundColor = "#ccccccc",
  boxShadow = "none",
  size = "10rem",
  children
}) => (
  <Box
    color={color}
    backgroundColor={backgroundColor}
    boxShadow={boxShadow}
    size={size}
  >
    {children}
  </Box>
);

export default ColoredBox;
