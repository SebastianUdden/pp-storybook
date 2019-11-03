import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import { MAIN_THEME } from "../../constants/theme";
import { MOCK_INSIDER } from "../../constants/mocks";

storiesOf("Table", module)
  .add("default - 3 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.market.headings}
      data={MOCK_INSIDER.tables.market.data}
    />
  ))
  .add("company - 8 columns", () => (
    <Table
      headingBackgroundColor="#587899"
      headingForegroundColor="#FFFFFF"
      headings={MOCK_INSIDER.tables.company.headings}
      data={MOCK_INSIDER.tables.company.data}
    />
  ))
  .add("financial statement - 16 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.financialStatement.headings}
      data={MOCK_INSIDER.tables.financialStatement.data}
    />
  ));
