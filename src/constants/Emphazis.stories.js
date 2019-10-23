import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import SearchParagraphs from "../components/searchParagraphs/SearchParagraphs";
import { MOCK_PARAGRAPHS } from "./mocks";
import ColoredBox from "../components/coloredBox/ColoredBox";
import { EMPHAZIS_TYPES } from "./theme";

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

storiesOf("Emphazis", module).add("all emphazis", () => (
  <Container>
    {Object.keys(EMPHAZIS_TYPES).map(emphazis => (
      <Wrapper>
        <ColoredBox
          emphazis={emphazis}
          color="#cccccc"
          backgroundColor="#222222"
        >
          Sample text
        </ColoredBox>
        <Label color="#cccccc">
          {emphazis.replace("_", " ").toLowerCase()}
        </Label>
      </Wrapper>
    ))}
  </Container>
));
