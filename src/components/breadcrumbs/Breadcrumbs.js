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

const IconPlaceholder = styled.div`
  width: 1px;
  height: 1rem;
  margin: 0 0.5rem;
  border-right: 1px solid ${p => p.color};
`;

const Breadcrumbs = ({
  crumbs = [],
  color = "#ffffff55",
  onChange,
  size = "small",
  icon = arrowRight
}) => {
  return (
    <Wrapper>
      {crumbs.map((crumb, index) => {
        if (!crumb || crumb.title === "undefined") return;
        return (
          <Breadcrumb key={crumb._id} onClick={() => onChange(crumb)}>
            {index !== 0 &&
              (icon ? (
                <SVG
                  color={color}
                  {...icon}
                  size={size === "x-small" ? 12 : 24}
                />
              ) : (
                <IconPlaceholder color={color} />
              ))}
            <Crumb color={color} size={size}>
              {crumb.title}
            </Crumb>
          </Breadcrumb>
        );
      })}
    </Wrapper>
  );
};

export default Breadcrumbs;
