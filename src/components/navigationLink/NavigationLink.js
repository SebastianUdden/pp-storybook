import React, { useState } from "react";
import styled from "styled-components";
import SVG from "../svg/SVG";
import { DEFAULT_FONT } from "../../constants/font";

const Title = styled.label`
  cursor: pointer;
  font-weight: ${p => (p.selected ? 900 : 400)};
  margin-left: 1.5rem;
  color: ${p => (p.selected ? p.colorHover : p.color)};
`;

const Wrapper = styled.div`
  font-family: ${DEFAULT_FONT.family};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  :hover {
    background-color: ${p => p.backgroundColor}33;
    ${Title} {
      color: ${p => p.colorHover};
    }
    ${SVG} {
      color: ${p => p.colorHover};
    }
  }
  :last-child {
    margin-bottom: 4rem;
  }
`;

const NavigationLink = ({
  backgroundColor = "#121212",
  colorHover = "white",
  color = "white",
  svg,
  title,
  selected,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      colorHover={colorHover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <SVG color={isHovered || selected ? colorHover : color} {...svg} />
      <Title color={color} colorHover={colorHover} selected={selected}>
        {title}
      </Title>
    </Wrapper>
  );
};

export default NavigationLink;
