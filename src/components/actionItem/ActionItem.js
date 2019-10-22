import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SVG from "../svg/SVG";
import { Button } from "../button/Button";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";

const Item = styled(Button)`
  background-color: inherit;
  border: none;
  padding: 2rem;
  margin: 0;
  min-width: 3rem;
  transform: ${p =>
    p.animate ? `rotate(0), scale(1)` : `rotate(270deg) scale(0.4)`};
  transition: transform 0.2s;

  ${MEDIA_MAX_MEDIUM} {
    padding: 1.5rem 1rem;
  }

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
  onClick
}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Item
      backgroundColorHover={backgroundColorHover}
      noBorder={noBorder}
      onClick={onClick}
      rotate={rotate}
      animate={animate}
    >
      <SVGWrapper backgroundColorHover={color}>
        <SVG {...svg} color={color} />
      </SVGWrapper>
    </Item>
  );
};

export default ActionItem;
