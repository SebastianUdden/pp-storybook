import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const H2 = styled.h2`
  color: white;
`;

export const Label = styled.label`
  font-size: large;
  text-align: center;
  opacity: ${p => p.opacity};
  color: ${p => p.color};
`;
