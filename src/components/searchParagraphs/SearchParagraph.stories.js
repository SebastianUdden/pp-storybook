import React from "react";
import { storiesOf } from "@storybook/react";

import SearchParagraphs from "./SearchParagraphs";
import { MOCK_PARAGRAPHS } from "../../constants/mocks";

storiesOf("Search paragraph", module)
  .add("default - no search", () => (
    <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />
  ))
  .add("search value 'farm-to-TABLE'", () => (
    <SearchParagraphs
      paragraphs={MOCK_PARAGRAPHS}
      searchValue="farm-to-TABLE"
    />
  ))
  .add("search value 'Shabby chic'", () => (
    <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} searchValue="Shabby chic" />
  ));
