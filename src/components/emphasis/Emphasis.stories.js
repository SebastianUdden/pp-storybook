import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import ColoredBox from "../coloredBox/ColoredBox";
import { EMPHASIS_TYPES } from "../../constants/theme";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const H2 = styled.h2`
  color: white;
`;

const Label = styled.label`
  font-size: large;
  text-align: center;
  opacity: ${p => p.opacity};
  color: ${p => p.color};
`;

storiesOf("Emphasis", module).add("all emphasis", () => (
  <>
    <H2>Box emphasis/opacity</H2>
    <Container>
      {Object.keys(EMPHASIS_TYPES).map(emphasis => (
        <Wrapper>
          <ColoredBox
            opacity={EMPHASIS_TYPES[emphasis]}
            color="#ffffff"
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
    <H2>Text emphasis/opacity</H2>
    <Container>
      {Object.keys(EMPHASIS_TYPES).map(emphasis => (
        <Wrapper>
          <ColoredBox color="#ffffff" backgroundColor="#222222">
            <Label opacity={EMPHASIS_TYPES[emphasis]}>
              Sample text {EMPHASIS_TYPES[emphasis]}
            </Label>
          </ColoredBox>
          <Label color="#cccccc" opacity={emphasis}>
            {emphasis.replace("_", " ").toLowerCase()}
          </Label>
        </Wrapper>
      ))}
    </Container>
  </>
));
