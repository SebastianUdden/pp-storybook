import styled from "styled-components";
import { MEDIUM_EMPHASIS } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";

const Text = styled.span`
  font-family: ${DEFAULT_FONT.family};
  color: ${p => p.foregroundColor || "inherit"};
  background-color: ${p => p.backgroundColor || "inherit"};
  opacity: ${p => p.emphasis || MEDIUM_EMPHASIS};
`;

export default Text;
