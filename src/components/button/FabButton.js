import React, { useState, useEffect } from "react";
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
import Button from "./Button";
import Ripple from "../ripple/Ripple";

export const StyledButton = styled(Button)`
  padding: 1rem;
  border-radius: 50%;
  min-width: 3.3rem;
  background-color: ${p => p.backgroundColor || "inherit"};
  ${p => p.mini && `padding: 0.4rem; margin: 0; min-width: 2rem;`}
  border: none;
  transform: ${p =>
    p.animate ? `rotate(0), scale(1)` : `rotate(270deg) scale(0.4)`};
  box-shadow: ${p => (!p.disabled ? p.boxShadow : "inherit")};
  transition: box-shadow 0.1s ease-in, background-color ease-in 0.1s,
    transform 0.2s;

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
  noMargin,
  mini,
  disabled
}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Ripple onClick={onClick} color={color} fab>
      <StyledButton
        color={disabled ? `${ON_SURFACE}33` : color}
        backgroundColor={disabled ? SURFACE : backgroundColor}
        backgroundColorHover={
          backgroundColorHover || backgroundColor || BACKGROUND_ACTIVE
        }
        boxShadow={boxShadow}
        raisedBoxShadow={raisedBoxShadow}
        mini={mini}
        disabled={disabled}
        noMargin={noMargin}
        animate={animate}
      >
        {children}
      </StyledButton>
    </Ripple>
  );
};

export default FabButton;
