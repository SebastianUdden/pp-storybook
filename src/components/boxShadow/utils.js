import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const Label = styled.label`
  font-size: large;
  text-align: center;
  color: ${p => p.color};
`;
