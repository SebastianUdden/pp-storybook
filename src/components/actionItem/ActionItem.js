import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SVG from "../svg/SVG";
import Button from "../button/Button";

const Item = styled(Button)`
  background-color: inherit;
  border: none;
  padding: ${p => p.padding}rem ${p => p.padding}rem ${p => p.padding - 0.3}rem
    ${p => p.padding}rem;
  margin: 0;
  min-width: ${p => p.minWidth};
  transform: ${p =>
    p.animate ? `rotate(0), scale(1)` : `rotate(270deg) scale(0.4)`};
  transition: transform 0.2s;

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

const SVGWrapper = styled.div`
  height: 100%;
  border-radius: 50%;
  :hover {
    background-color: ${p => p.backgroundColorHover}11;
  }
`;

const ActionItem = ({
  backgroundColorHover,
  rotate,
  color,
  svg,
  noBorder,
  onClick,
  id,
  minimal,
  padding = 2,
  minWidth = "3rem",
  size = 24,
  disabled
}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Item
      id={id}
      backgroundColorHover={backgroundColorHover}
      noBorder={noBorder}
      onClick={onClick}
      rotate={rotate}
      animate={animate}
      padding={minimal ? 1 : padding}
      minWidth={minimal ? "0rem" : minWidth}
      disabled={disabled}
    >
      <SVGWrapper backgroundColorHover={color}>
        <SVG {...svg} color={color} size={minimal ? 10 : size} />
      </SVGWrapper>
    </Item>
  );
};

export default ActionItem;
