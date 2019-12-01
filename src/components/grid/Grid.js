// TODO Fix grid
import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
`;

const Grid = ({ type, children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
