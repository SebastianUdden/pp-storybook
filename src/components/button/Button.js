import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";

export const Button = styled.button`
  font-family: ${DEFAULT_FONT.family};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  text-transform: uppercase;
  color: ${p => p.color || "inherit"};
  min-width: 4rem;
  padding: 0.8rem;
  margin: 0rem 0.2rem;
`;
