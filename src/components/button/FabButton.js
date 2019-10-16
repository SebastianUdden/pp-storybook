import React from "react";
import styled from "styled-components";
import {
  BACKGROUND_ACTIVE,
  ON_BACKGROUND,
  DP6,
  DPraised,
  SURFACE,
  ON_SURFACE,
  BACKGROUND
} from "../../constants/theme";
import { Button } from "./Button";

export const StyledButton = styled(Button)`
  background-color: ${p => p.backgroundColor || "inherit"};
  border-radius: 50%;
  min-width: 3.3rem;
  ${p => p.mini && `padding: 0.4rem; margin: 0; min-width: 2rem;`}
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

const FabButton = ({
  children,
  onClick,
  color = ON_BACKGROUND,
  backgroundColor = BACKGROUND,
  backgroundColorHover,
  boxShadow = DP6,
  raisedBoxShadow = DPraised,
  mini,
  disabled
}) => (
  <StyledButton
    onClick={onClick}
    color={disabled ? `${ON_SURFACE}33` : color}
    backgroundColor={disabled ? SURFACE : backgroundColor}
    backgroundColorHover={
      backgroundColorHover || backgroundColor || BACKGROUND_ACTIVE
    }
    boxShadow={boxShadow}
    raisedBoxShadow={raisedBoxShadow}
    mini={mini}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default FabButton;
