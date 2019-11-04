import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Chips from "./Chips";
import { MOCK_INSIDER } from "../../constants/mocks";
import Text from "../text/Text";

const Wrapper = styled.div`
  color: white;
`;

storiesOf("Chips", module).add("default", () => {
  const [chips, setChips] = useState([]);
  return (
    <Wrapper>
      <Chips
        chips={MOCK_INSIDER.tables.company.headings.map(
          heading => heading.title
        )}
        onChange={chips => setChips(chips)}
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
    </Wrapper>
  );
});
