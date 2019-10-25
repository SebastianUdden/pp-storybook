import React from "react";
import { storiesOf } from "@storybook/react";

import SearchSections from "./SearchSections";
import { MOCK_SECTIONS } from "../../constants/mocks";

storiesOf("Search section", module)
  .add("default - no search", () => <SearchSections sections={MOCK_SECTIONS} />)
  .add("search value 'farm-to-TABLE'", () => (
    <SearchSections sections={MOCK_SECTIONS} searchValue="farm-to-TABLE" />
  ))
  .add("search value 'Shabby chic'", () => (
    <SearchSections sections={MOCK_SECTIONS} searchValue="Shabby chic" />
  ));
