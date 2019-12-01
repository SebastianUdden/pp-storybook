import React, { useState } from "react";
import Chips from "./Chips";
import Text from "../text/Text";

const ChipsWrapper = ({ inputChips = [], allowMultiple }) => {
  const [chips, setChips] = useState([]);
  return (
    <div>
      <Chips
        chips={inputChips}
        onChange={chips => setChips(chips)}
        allowMultiple={allowMultiple}
      />
      <h1>
        <Text>Selected:</Text>
      </h1>
      <ul>
        {chips.map(chip => (
          <li>
            <Text>{chip}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipsWrapper;
