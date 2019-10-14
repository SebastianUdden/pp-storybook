import React from "react";
import renderer from "react-test-renderer";
import Stars from "../src/components/Stars";

export const actions = {};
export const size = {
  width: 24,
  height: 24
};

test("Stars renders correctly", () => {
  const tree = renderer
    .create(
      <Stars
        percentage={100}
        size={size}
        {...actions}
        color="orange"
        backgroundColor="transparent"
        fixedAmount
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
