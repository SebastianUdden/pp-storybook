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
  margin-top: 0.5rem;
  text-align: center;
  color: ${p => p.color};
  opacity: ${p => p.opacity};
`;

export const BigLabel = styled(Label)`
  font-size: xx-large;
`;

export const SmallLabel = styled(Label)`
  max-width: 8rem;
  font-size: large;
`;
