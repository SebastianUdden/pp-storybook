import React, { useState } from "react";
import styled from "styled-components";
import Text from "../text/Text";
import Dropdown from "./Dropdown";

const MOCK_OPTIONS = ["Default", "Green", "Red", "Blue"];
const FlexWrapper = styled.div`
  display: flex;
`;
const Em = styled.span`
  color: orange;
`;

const DropdownWrapper = ({ multiple }) => {
  const [firstSelected, setFirstSelecteded] = useState(MOCK_OPTIONS[0]);
  const [secondSelected, setSecondSelecteded] = useState(MOCK_OPTIONS[0]);
  const [thirdSelected, setThirdSelecteded] = useState(MOCK_OPTIONS[0]);
  return (
    <>
      <h2>
        <Text foregroundColor="#666666">
          Dropdown: <Em>{firstSelected}</Em>
        </Text>
      </h2>
      {multiple && (
        <>
          <h2>
            <Text foregroundColor="#666666">
              Dropdown2: <Em>{secondSelected}</Em>
            </Text>
          </h2>
          <h2>
            <Text foregroundColor="#666666">
              Dropdown3: <Em>{thirdSelected}</Em>
            </Text>
          </h2>
        </>
      )}
      <FlexWrapper>
        <Dropdown
          backgroundColor="#aaaaaa"
          options={MOCK_OPTIONS}
          selected={firstSelected}
          onChange={value => setFirstSelecteded(value)}
        />
        {multiple && (
          <>
            <Dropdown
              backgroundColor="#aaaaaa"
              options={MOCK_OPTIONS}
              selected={secondSelected}
              onChange={value => setSecondSelecteded(value)}
            />
            <Dropdown
              backgroundColor="#aaaaaa"
              options={MOCK_OPTIONS}
              selected={thirdSelected}
              onChange={value => setThirdSelecteded(value)}
            />
          </>
        )}
      </FlexWrapper>
    </>
  );
};

export default DropdownWrapper;
