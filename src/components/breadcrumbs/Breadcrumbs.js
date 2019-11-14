import React from "react";
import styled from "styled-components";
import SVG from "../svg/SVG";
import { arrowRight } from "../../svgs/navigation/arrow-right";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
`;
const Crumb = styled.button`
  margin: 0;
  padding: 0;
  font-size: ${p => p.size};
  color: ${p => p.color};
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const Breadcrumbs = ({
  crumbs = [],
  color = "#ffffff55",
  setSelected,
  size = "small",
  icon = arrowRight
}) => {
  return (
    <Wrapper>
      {crumbs.map((crumb, index) => (
        <Breadcrumb onClick={() => setSelected(crumb)}>
          {index !== 0 && (
            <SVG color={color} {...icon} size={size === "x-small" ? 12 : 24} />
          )}
          <Crumb color={color} size={size}>
            {crumb}
          </Crumb>
        </Breadcrumb>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs;