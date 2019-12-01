import styled from "styled-components";
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes";

export const Wrapper = styled.div`
  width: 100%;
  ${MEDIA_MIN_MEDIUM} {
    width: 20rem;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const H2 = styled.h2`
  margin-right: 1rem;
`;
export const Span = styled.span`
  font-size: x-large;
`;
export const Item = styled.div`
  padding: 2rem;
  background-color: white;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid black;
`;
