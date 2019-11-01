import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Flex from "./Flex";
import Card from "../card/Card";
import Text from "../text/Text";
import { ON_BACKGROUND, MAIN_THEME } from "../../constants/theme";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

const MOCK_CARDS = [
  {
    title: "One",
    secondaryText: "The first ape"
  },
  {
    title: "Two",
    secondaryText: "The second banana"
  },
  {
    title: "Three",
    secondaryText: "The third bike"
  },
  {
    title: "Four",
    secondaryText: "The fourth dart"
  },
  {
    title: "Five",
    secondaryText: "The fifth escimoe"
  },
  {
    title: "Six",
    secondaryText: "The sixth lighthouse"
  },
  {
    title: "Seven",
    secondaryText: "The seventh pig"
  },
  {
    title: "Eight",
    secondaryText: "The eight haystack"
  },
  {
    title: "Nine",
    secondaryText: "The ninth icecube"
  },
  {
    title: "Ten",
    secondaryText: "The tenth ambulance"
  }
];

const Wrapper = styled.div``;
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

storiesOf("Flex", module).add("default", () => {
  const [alignVertical, setAlignVertical] = useState("flex-start");
  const [alignHorizontal, setAlignHorizontal] = useState("flex-end");

  return (
    <Wrapper>
      <h1>
        <Text foregroundColor={ON_BACKGROUND}>Flex trial</Text>
      </h1>
      <FlexWrapper>
        <h2>
          <Text foregroundColor={ON_BACKGROUND}>Align vertical</Text>
        </h2>
        <ToggleSwitch
          id="flex-start"
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          rounded={true}
          checked={alignVertical === "flex-end"}
          onClick={e => {
            console.log(e);
            setAlignVertical(
              alignVertical === "flex-start" ? "flex-end" : "flex-start"
            );
          }}
        />
      </FlexWrapper>
      <FlexWrapper>
        <h2>
          <Text foregroundColor={ON_BACKGROUND}>Align horizontal</Text>
        </h2>
        <ToggleSwitch
          id="flex-end"
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          rounded={true}
          checked={alignHorizontal === "flex-start"}
          onClick={() =>
            setAlignHorizontal(
              alignHorizontal === "flex-start" ? "flex-end" : "flex-start"
            )
          }
        />
      </FlexWrapper>
      <Flex alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
        {MOCK_CARDS.map(card => (
          <Card {...card} />
        ))}
      </Flex>
    </Wrapper>
  );
});
