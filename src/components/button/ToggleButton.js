import React from "react";
import styled from "styled-components";
import {
  BACKGROUND_ACTIVE,
  ON_BACKGROUND,
  BACKGROUND,
  ON_SURFACE
} from "../../constants/theme";
import { Button } from "./Button";

export const StyledButton = styled(Button)`
  margin: 0;
  background-color: ${p => (p.selected ? p.backgroundColor : "inherit")};
  border: 1px solid ${p => p.backgroundColorHover || "inherit"};

  :hover {
    background-color: ${p =>
      p.selected
        ? p.backgroundColor
        : p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}33`
        : "inherit"};
  }
  :focus {
    background-color: ${p =>
      p.selected
        ? p.backgroundColor
        : p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}88`
        : "inherit"};
  }
  :active {
    background-color: ${p =>
      p.selected
        ? p.backgroundColor
        : p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}BB`
        : "inherit"};
  }
`;

const ToggleButton = ({
  children,
  onClick,
  color = ON_BACKGROUND,
  backgroundColor = BACKGROUND,
  backgroundColorHover = BACKGROUND_ACTIVE,
  disabled,
  selected
}) => (
  <StyledButton
    onClick={onClick}
    color={disabled ? `${ON_SURFACE}33` : color}
    backgroundColor={backgroundColor}
    backgroundColorHover={backgroundColorHover}
    selected={selected}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default ToggleButton;
