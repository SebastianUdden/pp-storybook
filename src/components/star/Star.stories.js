import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Star from "./Star";

export const actions = {};
export const attributes = {
  width: 24,
  height: 24
};

storiesOf("Star", module)
  .add("default", () => (
    <Star
      id="Default"
      color={"orange"}
      remainderRatio={0}
      {...attributes}
      {...actions}
      onClick={() => setColor("grey")}
    />
  ))
  .add("semi-filled", () => (
    <Star
      id="Semi-filled"
      color={"orange"}
      remainderRatio={0.5}
      {...attributes}
      {...actions}
    />
  ))
  .add("filled", () => (
    <Star
      id="Filled"
      color={"orange"}
      remainderRatio={1}
      {...attributes}
      {...actions}
    />
  ))
  .add("dynamic", () => {
    const [color, setColor] = useState("grey");
    return (
      <Star
        id="Dynamic"
        color={color}
        remainderRatio={1}
        {...attributes}
        {...actions}
        onClick={() => setColor(color === "grey" ? "orange" : "grey")}
      />
    );
  });
