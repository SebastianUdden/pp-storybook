import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Grid from "./Grid";
import Card from "../card/Card";

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
    secondaryText: "The tenth ambulance",
    area: "header"
  }
];

const GridItem = styled.div`
  border: 1px solid green;
  grid-area: ${p => p.area};
`;

storiesOf("Grid", module).add("default", () => (
  <Grid>
    {MOCK_CARDS.map(card => (
      <GridItem area={card.area}>
        <Card {...card} />
      </GridItem>
    ))}
  </Grid>
));
