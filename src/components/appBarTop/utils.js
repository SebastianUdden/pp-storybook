import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";
import { MEDIA_MAX_MEDIUM } from "../../constants/theme";

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.largeSize};
  margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  padding: 0;
  ${MEDIA_MAX_MEDIUM} {
    margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
