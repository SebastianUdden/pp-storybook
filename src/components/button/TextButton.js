import React from "react";
import styled from "styled-components";
import { BACKGROUND_ACTIVE, ON_BACKGROUND } from "../../constants/theme";
import { Button } from "./Button";

export const StyledButton = styled(Button)`
  background-color: inherit;
  border: none;
  :hover {
    background-color: ${p =>
      p.backgroundColorHover ? `${p.backgroundColorHover}33` : "inherit"};
  }
  :focus {
    background-color: ${p =>
      p.backgroundColorHover ? `${p.backgroundColorHover}88` : "inherit"};
  }
  :active {
    background-color: ${p =>
      p.backgroundColorHover ? `${p.backgroundColorHover}BB` : "inherit"};
  }
`;

const TextButton = ({
  children,
  onClick,
  color = ON_BACKGROUND,
  backgroundColorHover = BACKGROUND_ACTIVE,
  disabled
}) => (
  <StyledButton
    onClick={onClick}
    color={disabled ? backgroundColorHover : color}
    backgroundColorHover={!disabled && backgroundColorHover}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default TextButton;
