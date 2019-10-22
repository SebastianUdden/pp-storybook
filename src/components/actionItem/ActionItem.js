import React from "react";
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

const ActionItem = ({
  backgroundColorHover,
  color,
  svg,
  noBorder,
  onClick
}) => (
  <Item
    backgroundColorHover={backgroundColorHover}
    noBorder={noBorder}
    onClick={onClick}
  >
    <SVG {...svg} color={color} />
  </Item>
);

export default ActionItem;
