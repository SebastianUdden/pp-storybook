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
  .add("all icons", () => (
    <>
      <SVG {...cross} />
      <SVG {...eyeHide} />
      <SVG {...eyeShow} />
      <SVG {...plus} />
      <SVG {...rocket} />
      <SVG {...rocketColored} />
    </>
  ))
  .add("cross", () => <SVG {...cross} />)
  .add("eye-hide", () => <SVG {...eyeHide} />)
  .add("eye-show", () => <SVG {...eyeShow} />)
  .add("plus", () => <SVG {...plus} />)
  .add("rocket", () => <SVG {...rocket} />)
  .add("rocket-colored", () => <SVG {...rocketColored} />);
