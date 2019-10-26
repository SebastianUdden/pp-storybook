import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import HighlightedText from "./HighlightedText";
import { MAIN_THEME } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";

const Paragraph = styled.p`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  padding: 1rem;
  color: white;
  background-color: #333333;
`;

storiesOf("Highlighted text", module)
  .add("default - input highlight", () => (
    <Paragraph>
      <HighlightedText
        text="Some text that's partly highlighted"
        highlight="Highlight"
      />
    </Paragraph>
  ))
  .add("theme color - input GROOVY-tequila", () => (
    <Paragraph>
      <HighlightedText
        text="This is some funky text about the groovy-TEQUILA! By the way, highlighting is not case sensitive. Awesome right?"
        highlight="GROOVY-tequila"
        foregroundColor={MAIN_THEME.PRIMARY_LIGHT.color.background}
        backgroundColor={`${MAIN_THEME.PRIMARY_LIGHT.color.foreground}33`}
      />
    </Paragraph>
  ));
