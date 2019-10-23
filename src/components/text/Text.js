import styled from "styled-components";
import { MEDIUM_EMPHASIS } from "../../constants/theme";

export const Text = styled.span`
  font-family: "Nunito", sans-serif;
  color: ${p => p.color || "inherit"};
  opacity: ${p => p.emphasis || MEDIUM_EMPHASIS};
`;
