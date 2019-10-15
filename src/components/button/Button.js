import styled from "styled-components";

export const Button = styled.button`
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  text-transform: uppercase;
  color: ${p => p.color || "inherit"};
  padding: 0.8rem;
`;
