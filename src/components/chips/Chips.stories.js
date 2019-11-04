import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Chips from "./Chips";
import { MOCK_INSIDER } from "../../constants/mocks";
import Text from "../text/Text";
import SVG from "../svg/SVG";
import { donutSmall } from "../../svgs/actions/donut-small";

const Wrapper = styled.div`
  color: white;
`;

storiesOf("Chips", module)
  .add("multiple select", () => {
    const [chips, setChips] = useState([]);
    return (
      <Wrapper>
        <Chips
          chips={MOCK_INSIDER.tables.company.headings.map(heading => ({
            title: heading.title
          }))}
          onChange={chips => setChips(chips)}
          allowMultiple
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
  })
  .add("single select", () => {
    const [chips, setChips] = useState([]);
    return (
      <Wrapper>
        <Chips
          chips={MOCK_INSIDER.tables.company.headings.map(heading => ({
            title: heading.title
          }))}
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
  })
  .add("single select - custom icon", () => {
    const [chips, setChips] = useState([]);
    return (
      <Wrapper>
        <Chips
          chips={MOCK_INSIDER.tables.company.headings.map(heading => ({
            title: heading.title,
            icon: <SVG {...donutSmall} />
          }))}
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
