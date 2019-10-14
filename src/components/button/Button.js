import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${p => p.backgroundColor || "inherit"};
  padding: 0.5rem;
`;

const Button = ({ children, onClick, backgroundColor }) => (
  <StyledButton onClick={onClick} backgroundColor={backgroundColor}>
    {children}
  </StyledButton>
);

export default Button;
