import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;

  top: 0;
  left: 0;
  right: 20%;
  bottom: 0;
  padding: 1rem;
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  box-shadow: ${p => p.boxShadow};
`;

const MenuDrawer = ({ boxShadow, color, backgroundColor, children }) => {
  return (
    <Wrapper
      boxShadow={boxShadow}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </Wrapper>
  );
};

export default MenuDrawer;
