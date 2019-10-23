import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import ColoredBox from "../coloredBox/ColoredBox";
import { DP_TYPES } from "../../constants/theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const Label = styled.label`
  font-size: large;
  text-align: center;
  color: ${p => p.color};
`;

storiesOf("Box shadow", module).add("all box shadows", () => (
  <Container>
    {Object.keys(DP_TYPES).map(dp => (
      <Wrapper>
        <ColoredBox backgroundColor="#666666" boxShadow={DP_TYPES[dp]} />
        <Label color="#cccccc">{dp.replace("_", " ").toLowerCase()}</Label>
      </Wrapper>
    ))}
  </Container>
));
