import styled from "styled-components";

export const Button = styled.button`
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  text-transform: uppercase;
  color: ${p => p.color || "inherit"};
  min-width: 4rem;
  padding: 0.8rem;
  margin: 0rem 0.2rem;
`;
