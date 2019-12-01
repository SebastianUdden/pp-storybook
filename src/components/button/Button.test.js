import React from "react";
import renderer from "react-test-renderer";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import TextButton from "./TextButton";
import OutlineButton from "./OutlineButton";
import ToggleButton from "./ToggleButton";
import ContainedButton from "./ContainedButton";
import FabButton from "./FabButton";

describe("Button tests", () => {
  test("Button renders correctly", () => {
    const tree = renderer
      .create(<Button onClick={action("clicked")}>Default Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Text button renders correctly", () => {
    const tree = renderer
      .create(<TextButton onClick={action("clicked")}>Text Button</TextButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Outline button renders correctly", () => {
    const tree = renderer
      .create(
        <OutlineButton onClick={action("clicked")}>
          Outline Button
        </OutlineButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Contained button renders correctly", () => {
    const tree = renderer
      .create(
        <ContainedButton onClick={action("clicked")}>
          Contained Button
        </ContainedButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Toggle button renders correctly", () => {
    const tree = renderer
      .create(
        <ToggleButton onClick={action("clicked")}>Toggle Button</ToggleButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Fab button renders correctly", () => {
    const tree = renderer
      .create(<FabButton onClick={action("clicked")}>Fab Button</FabButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
