import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";

const Button = styled.button`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${p => p.fontSize || "x-small"};
  font-weight: ${p => p.fontWeight || "inherit"};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  color: ${p => p.color || "inherit"};
  text-transform: uppercase;
  user-select: none;
  min-width: 4rem;
  padding: 0.8rem;
`;

export default Button;
