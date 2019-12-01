import React from "react";
import styled from "styled-components";
import { BACKGROUND_ACTIVE, ON_BACKGROUND } from "../../constants/theme";
import Button from "./Button";
import Ripple from "../ripple/Ripple";

export const StyledButton = styled(Button)`
  background-color: inherit;
  border: 1px solid ${p => p.backgroundColorHover || "inherit"};

  :hover {
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}33`
        : "inherit"};
  }
  :focus {
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}88`
        : "inherit"};
  }
  :active {
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}BB`
        : "inherit"};
  }
`;

const OutlineButton = ({
  children,
  onClick,
  color = ON_BACKGROUND,
  backgroundColorHover = BACKGROUND_ACTIVE,
  disabled
}) => (
  <Ripple onClick={onClick} color={color}>
    <StyledButton
      color={disabled ? backgroundColorHover : color}
      backgroundColorHover={backgroundColorHover}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  </Ripple>
);

export default OutlineButton;
