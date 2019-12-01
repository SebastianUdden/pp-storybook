import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";

export const Wrapper = styled.div`
  border: 1px solid transparent;
`;
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: ${DEFAULT_FONT.size};
  margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  padding: 0;
  ${MEDIA_MAX_MEDIUM} {
    margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  }
`;
export const H2 = styled.h2`
  margin-bottom: 2rem;
`;
