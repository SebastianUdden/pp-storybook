import React from "react";
import styled from "styled-components";
import { BACKGROUND_ACTIVE, ON_BACKGROUND } from "../../constants/theme";
import { Button } from "./Button";

export const StyledButton = styled(Button)`
  background-color: inherit;
  border: none;
  padding: ${p => (p.small ? "0.3rem" : "inherit")};

  :hover {
    background-color: ${p =>
      p.backgroundColorHover ? `${p.backgroundColorHover}22` : "inherit"};
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
  disabled,
  small,
  fontSize,
  fontWeight
}) => (
  <StyledButton
    onClick={onClick}
    color={disabled ? backgroundColorHover : color}
    backgroundColorHover={!disabled && backgroundColorHover}
    disabled={disabled}
    small={small}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >
    {children}
  </StyledButton>
);

export default TextButton;
