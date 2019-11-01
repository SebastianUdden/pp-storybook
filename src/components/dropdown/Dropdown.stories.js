import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Dropdown from "./Dropdown";
import Text from "../text/Text";

const MOCK_OPTIONS = ["Default", "Green", "Red", "Blue"];
const FlexWrapper = styled.div`
  display: flex;
`;
const Em = styled.span`
  color: orange;
`;

storiesOf("Dropdown", module)
  .add("default", () => {
    const [selected, setSelecteded] = useState("Default");
    return (
      <>
        <h2>
          <Text foregroundColor="white">
            Selected value: <Em>{selected}</Em>
          </Text>
        </h2>
        <FlexWrapper>
          <Dropdown
            options={MOCK_OPTIONS}
            selected={selected}
            onChange={value => setSelecteded(value)}
          />
        </FlexWrapper>
      </>
    );
  })
  .add("multiple", () => {
    const [firstSelected, setFirstSelecteded] = useState(MOCK_OPTIONS[0]);
    const [secondSelected, setSecondSelecteded] = useState(MOCK_OPTIONS[0]);
    const [thirdSelected, setThirdSelecteded] = useState(MOCK_OPTIONS[0]);
    return (
      <>
        <h2>
          <Text foregroundColor="white">
            Dropdown1: <Em>{firstSelected}</Em>
          </Text>
        </h2>
        <h2>
          <Text foregroundColor="white">
            Dropdown2: <Em>{secondSelected}</Em>
          </Text>
        </h2>
        <h2>
          <Text foregroundColor="white">
            Dropdown3: <Em>{thirdSelected}</Em>
          </Text>
        </h2>
        <FlexWrapper>
          <Dropdown
            options={MOCK_OPTIONS}
            selected={firstSelected}
            onChange={value => setFirstSelecteded(value)}
          />
          <Dropdown
            options={MOCK_OPTIONS}
            selected={secondSelected}
            onChange={value => setSecondSelecteded(value)}
          />
          <Dropdown
            options={MOCK_OPTIONS}
            selected={thirdSelected}
            onChange={value => setThirdSelecteded(value)}
          />
        </FlexWrapper>
      </>
    );
  });
