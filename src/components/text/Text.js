import styled from "styled-components";
import { MEDIUM_EMPHASIS } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";

export const Text = styled.span`
  font-family: ${DEFAULT_FONT.family};
  color: ${p => p.color || "inherit"};
  opacity: ${p => p.emphasis || MEDIUM_EMPHASIS};
`;
