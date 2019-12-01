import React from "react";
import styled from "styled-components";
import {
  BACKGROUND_ACTIVE,
  ON_BACKGROUND,
  DP2,
  DP8,
  SURFACE,
  ON_SURFACE,
  BACKGROUND
} from "../../constants/theme";
import Button from "./Button";
import Ripple from "../ripple/Ripple";

export const StyledButton = styled(Button)`
  background-color: ${p => p.backgroundColor || "inherit"};
  border: none;
  box-shadow: ${p => (!p.disabled ? p.boxShadow : "inherit")};
  transition: box-shadow 0.1s ease-in, background-color ease-in 0.1s;

  :hover {
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}DD`
        : p.backgroundColor};
    box-shadow: ${p =>
      !p.disabled ? p.raisedBoxShadow || p.boxShadow : "none"};
  }
  :focus {
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}88`
        : "inherit"};
    box-shadow: ${p =>
      !p.disabled ? p.raisedBoxShadow || p.boxShadow : "inherit"};
  }
  :active {
    box-shadow: ${p => (!p.disabled ? p.boxShadow : "inherit")};
    background-color: ${p =>
      p.backgroundColorHover && !p.disabled
        ? `${p.backgroundColorHover}CC`
        : "inherit"};
  }
`;

const ContainedButton = ({
  children,
  onClick,
  color = ON_BACKGROUND,
  backgroundColor = BACKGROUND,
  backgroundColorHover,
  boxShadow = DP2,
  raisedBoxShadow = DP8,
  disabled
}) => (
  <Ripple onClick={onClick} color={color}>
    <StyledButton
      color={disabled ? `${ON_SURFACE}33` : color}
      backgroundColor={disabled ? SURFACE : backgroundColor}
      backgroundColorHover={
        backgroundColorHover || backgroundColor || BACKGROUND_ACTIVE
      }
      boxShadow={boxShadow}
      raisedBoxShadow={raisedBoxShadow}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  </Ripple>
);

export default ContainedButton;
