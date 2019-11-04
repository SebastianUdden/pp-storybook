import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import { MAIN_THEME } from "../../constants/theme";
import { MOCK_INSIDER } from "../../constants/mocks";
import Text from "../text/Text";
import { getLinkValues } from "../../utils/markdownParsers";

storiesOf("Table", module)
  .add("default - 3 columns with select", () => {
    const [selected, setSelected] = useState([]);
    return (
      <>
        <h1>
          <Text foregroundColor="#ffffff">
            Selected row:{" "}
            {selected.length ? getLinkValues(selected[0])[0] : "None"}
          </Text>
        </h1>
        {selected.length ? (
          <>
            <h2>
              <Text foregroundColor="#ffffff">Transactions: {selected[1]}</Text>
            </h2>
            <h2>
              <Text foregroundColor="#ffffff">Bought/Sold: {selected[2]}</Text>
            </h2>
          </>
        ) : null}
        <Table
          headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
          headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
          headings={MOCK_INSIDER.tables.market.headings}
          data={MOCK_INSIDER.tables.market.data}
          onClick={row => setSelected(row.cells)}
        />
      </>
    );
  })
  .add("company - 8 columns", () => (
    <Table
      headingBackgroundColor="#587899"
      headingForegroundColor="#FFFFFF"
      headings={MOCK_INSIDER.tables.company.headings}
      data={MOCK_INSIDER.tables.company.data}
    />
  ))
  .add("company with resize - 8 columns", () => (
    <Table
      headingBackgroundColor="#587899"
      headingForegroundColor="#FFFFFF"
      headings={MOCK_INSIDER.tables.company.headings}
      data={MOCK_INSIDER.tables.company.data}
      enableResize
    />
  ))
  .add("company with lock - 8 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.financialStatement.headings}
      data={MOCK_INSIDER.tables.financialStatement.data}
      enableLock
    />
  ))
  .add("company with search - 8 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.financialStatement.headings}
      data={MOCK_INSIDER.tables.financialStatement.data}
      enableSearch
    />
  ))
  .add("company with lock and search - 8 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.financialStatement.headings}
      data={MOCK_INSIDER.tables.financialStatement.data}
      enableLock
      enableSearch
    />
  ))
  .add("company with resize, lock and search - 8 columns", () => (
    <Table
      headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
      headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
      headings={MOCK_INSIDER.tables.financialStatement.headings}
      data={MOCK_INSIDER.tables.financialStatement.data}
      enableResize
      enableLock
      enableSearch
    />
  ));
