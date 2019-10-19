import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";
import { cross } from "../../svgs/generic/cross";
import { eyeShow } from "../../svgs/generic/eye-show";
import { eyeHide } from "../../svgs/generic/eye-hide";
import { plus } from "../../svgs/generic/plus";
import { rocket } from "../../svgs/generic/rocket";
import { rocketColored } from "../../svgs/generic/rocket-colored";

storiesOf("SVG generic", module)
  .add("cross", () => <SVG color={"white"} {...cross} size={24} />)
  .add("eye-hide", () => <SVG color={"white"} {...eyeHide} size={24} />)
  .add("eye-show", () => <SVG color={"white"} {...eyeShow} size={24} />)
  .add("plus", () => <SVG color={"white"} {...plus} size={24} />)
  .add("rocket", () => <SVG color={"white"} {...rocket} size={24} />)
  .add("rocket-colored", () => (
    <SVG color={"white"} {...rocketColored} size={24} />
  ));
