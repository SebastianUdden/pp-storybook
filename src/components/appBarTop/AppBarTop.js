import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: ${p => (p.large ? "6rem" : "auto")};
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  background-color: black;
  color: white;

  position: sticky;
  overflow: hidden;
  top: 0;
`;

const AppBarTop = ({ children, type = "regular" }) => {
  return <Container large={type !== "regular"}>{children}</Container>;
};

export default AppBarTop;
