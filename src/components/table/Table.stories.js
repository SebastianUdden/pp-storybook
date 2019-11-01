import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";

const MOCK_HEADINGS = [
  "Publiceringsdatum",
  "Person i ledande ställning",
  "Befattning",
  "Typ",
  "Instrumentnamn",
  "Volym",
  "Pris",
  "MV",
  "URL till 'Detaljer'"
];

const MOCK_DATA = {
  rows: [
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    },
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    },
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    },
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    },
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    },
    {
      cells: [
        "Some",
        "Value",
        "Value",
        "Value",
        "Temp",
        "Temp",
        "Temp",
        "Temp",
        <a href="https://lmgtfy.com/?q=tables&s=g" target="_blank">
          Tables
        </a>
      ]
    }
  ]
};

storiesOf("Table", module).add("default", () => (
  <Table headings={MOCK_HEADINGS} data={MOCK_DATA} />
));
