import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import SearchParagraphs from "../components/searchParagraphs/SearchParagraphs";
import { MOCK_PARAGRAPHS } from "./mocks";
import ColoredBox from "../components/coloredBox/ColoredBox";
import { THEME_COLORS, ALTERNATE_THEME_COLORS } from "./theme";

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
  color: ${p => p.color};
`;

storiesOf("Color", module)
  .add("all colors", () => (
    <Container>
      {Object.keys(THEME_COLORS).map(color => (
        <Wrapper>
          <ColoredBox backgroundColor={THEME_COLORS[color]} />
          <Label color="#cccccc">{color.replace("_", " ").toLowerCase()}</Label>
        </Wrapper>
      ))}
    </Container>
  ))
  .add("all alternate colors", () => (
    <Container>
      {Object.keys(ALTERNATE_THEME_COLORS).map(color => (
        <Wrapper>
          <ColoredBox backgroundColor={ALTERNATE_THEME_COLORS[color]} />
          <Label color="#cccccc">{color.replace("_", " ").toLowerCase()}</Label>
        </Wrapper>
      ))}
    </Container>
  ))
  .add("paragraph", () => <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />);
