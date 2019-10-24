import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import MenuDrawer from "./MenuDrawer";
import SearchParagraphs from "../searchParagraphs/SearchParagraphs";
import { MOCK_PARAGRAPHS } from "../../constants/mocks";
import { DP6, SECONDARY_THEME } from "../../constants/theme";

const Wrapper = styled.div`
  border: 1px solid transparent;
`;

storiesOf("Menu drawer", module).add("default", () => (
  <Wrapper>
    <MenuDrawer
      boxShadow={DP6}
      color={SECONDARY_THEME.BACKGROUND.color.foreground}
      backgroundColor={SECONDARY_THEME.BACKGROUND.color.background}
    >
      <h1>Title</h1>
      <h2>Subtitle 1</h2>
      <h2>Subtitle 2</h2>
    </MenuDrawer>
    <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />
  </Wrapper>
));
