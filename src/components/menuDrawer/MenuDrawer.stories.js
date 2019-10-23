import React from "react";
import { storiesOf } from "@storybook/react";

import MenuDrawer from "./MenuDrawer";
import SearchParagraphs from "../searchParagraphs/SearchParagraphs";
import { MOCK_PARAGRAPHS } from "../../constants/mocks";

storiesOf("Menu drawer", module).add("default", () => (
  <div>
    <MenuDrawer />
    <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />
  </div>
));
