import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
`;

const MenuDrawer = () => {
  return (
    <Wrapper>
      <h1>Title</h1>
      <h2>Subtitle 1</h2>
      <h2>Subtitle 2</h2>
    </Wrapper>
  );
};

export default MenuDrawer;
