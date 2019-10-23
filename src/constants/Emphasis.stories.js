import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import ColoredBox from "../components/coloredBox/ColoredBox";
import { EMPHASIS_TYPES } from "./theme";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const Label = styled.label`
  font-size: large;
  text-align: center;
  opacity: ${p => p.opacity};
  color: ${p => p.color};
`;

storiesOf("Emphasis", module).add("all emphasis", () => (
  <Container>
    {Object.keys(EMPHASIS_TYPES).map(emphasis => (
      <Wrapper>
        <ColoredBox
          opacity={EMPHASIS_TYPES[emphasis]}
          color="#cccccc"
          backgroundColor="#222222"
        >
          Sample text {EMPHASIS_TYPES[emphasis]}
        </ColoredBox>
        <Label color="#cccccc" opacity={emphasis}>
          {emphasis.replace("_", " ").toLowerCase()}
        </Label>
      </Wrapper>
    ))}
  </Container>
));
