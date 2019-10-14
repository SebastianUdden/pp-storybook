import React from "react";
import renderer from "react-test-renderer";
import Star from "./Star";

export const actions = {};
export const attributes = {
  width: 24,
  height: 24
};

test("Star renders correctly", () => {
  const tree = renderer
    .create(
      <Star
        id="Default"
        color={"orange"}
        remainderRatio={0}
        {...attributes}
        {...actions}
        onClick={() => setColor("grey")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
