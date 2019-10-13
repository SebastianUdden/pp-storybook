import React from "react";
import { storiesOf } from "@storybook/react";
import Stars from "../src/components/Stars";

export const actions = {};
export const size = {
  width: 24,
  height: 24
};

storiesOf("Stars", module)
  .add("default", () => (
    <Stars
      percentage={100}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="transparent"
      fixedAmount
    />
  ))
  .add("3.5 filled", () => (
    <Stars
      percentage={70}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="transparent"
      fixedAmount
    />
  ))
  .add("3.25 filled", () => (
    <Stars
      percentage={65}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="transparent"
      fixedAmount
    />
  ))
  .add("2.75 filled with background", () => (
    <Stars
      percentage={55}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="grey"
      fixedAmount
    />
  ))
  .add("2.5 filled with background", () => (
    <Stars
      percentage={50}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="grey"
      fixedAmount
    />
  ))
  .add("dynamic", () => (
    <Stars
      percentage={60}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="grey"
    />
  ))
  .add("dynamic 10", () => (
    <Stars
      amount={10}
      percentage={60}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="grey"
    />
  ))
  .add("dynamic 20", () => (
    <Stars
      amount={20}
      percentage={60}
      size={size}
      {...actions}
      color="orange"
      backgroundColor="grey"
    />
  ));
