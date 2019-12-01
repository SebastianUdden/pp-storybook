import React, { useState } from "react";
import DataCards from "./DataCards";
import Text from "../text/Text";
import Chips from "../chips/Chips";

const DataCardsWrapper = ({
  inputHeadings = [{ title: "" }],
  inputData = {},
  inputChips
}) => {
  const [selected, setSelected] = useState([]);
  const [chips, setChips] = useState([]);

  return (
    <>
      {inputChips && (
        <Chips
          chips={inputChips}
          onChange={chips => setChips(chips)}
          allowMultiple
        />
      )}
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
        filters={chips}
        headings={inputHeadings}
        data={inputData}
        onClick={row => setSelected(row.cells)}
      />
    </>
  );
};

export default DataCardsWrapper;
