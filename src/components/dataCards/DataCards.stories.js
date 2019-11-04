import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import DataCards from "./DataCards";
import { MOCK_INSIDER } from "../../constants/mocks";
import { getLinkValues } from "../../utils/markdownParsers";
import Text from "../text/Text";
import Chips from "../chips/Chips";

storiesOf("Data cards", module)
  .add("default - with select", () => {
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
        <DataCards
          headings={MOCK_INSIDER.tables.financialStatement.headings}
          data={MOCK_INSIDER.tables.financialStatement.data}
          onClick={row => setSelected(row.cells)}
        />
      </>
    );
  })
  .add("with filters - with select", () => {
    const [selected, setSelected] = useState([]);
    const [chips, setChips] = useState([]);
    return (
      <>
        <Chips
          chips={MOCK_INSIDER.tables.company.headings.map(heading => ({
            title: heading.title
          }))}
          onChange={chips => setChips(chips)}
          allowMultiple
        />
        <h1>
          <Text foregroundColor="#ffffff">
            Selected row:{" "}
            {selected.length ? getLinkValues(selected[0])[0] : "None"}
          </Text>
        </h1>
        {selected.length ? (
          <>
            <h2>
              <Text foregroundColor="#ffffff">
                {MOCK_INSIDER.tables.financialStatement.headings[1].title}:{" "}
                {selected[1]}
              </Text>
            </h2>
            <h2>
              <Text foregroundColor="#ffffff">
                {MOCK_INSIDER.tables.financialStatement.headings[2].title}:{" "}
                {selected[2]}
              </Text>
            </h2>
          </>
        ) : null}
        <DataCards
          filters={chips}
          headings={MOCK_INSIDER.tables.financialStatement.headings}
          data={MOCK_INSIDER.tables.financialStatement.data}
          onClick={row => setSelected(row.cells)}
        />
      </>
    );
  });
