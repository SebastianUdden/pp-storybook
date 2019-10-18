import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { checkBox } from "../../svgs/toggle/check-box";
import { checkBoxOutlineBlank } from "../../svgs/toggle/check-box-outline-blank";
import { indeterminateCheckBox } from "../../svgs/toggle/indeterminate-check-box";
import { radioButtonChecked } from "../../svgs/toggle/radio-button-checked";
import { radioButtonUnchecked } from "../../svgs/toggle/radio-button-unchecked";
import { star } from "../../svgs/toggle/star";
import { starBorder } from "../../svgs/toggle/star-border";
import { starHalf } from "../../svgs/toggle/star-half";
import { toggleOff } from "../../svgs/toggle/toggle-off";
import { toggleOn } from "../../svgs/toggle/toggle-on";

storiesOf("SVG toggle", module)
  .add("check-box", () => <SVG color={"white"} size={24} {...checkBox} />)
  .add("check-box outline blank", () => (
    <SVG color={"white"} size={24} {...checkBoxOutlineBlank} />
  ))
  .add("indeterminate check-box", () => (
    <SVG color={"white"} size={24} {...indeterminateCheckBox} />
  ))
  .add("radio-button checked", () => (
    <SVG color={"white"} size={24} {...radioButtonChecked} />
  ))
  .add("radio-button unchecked", () => (
    <SVG color={"white"} size={24} {...radioButtonUnchecked} />
  ))
  .add("star", () => <SVG color={"white"} size={24} {...star} />)
  .add("star border", () => <SVG color={"white"} size={24} {...starBorder} />)
  .add("star half", () => <SVG color={"white"} size={24} {...starHalf} />)
  .add("toggle off", () => <SVG color={"white"} size={24} {...toggleOff} />)
  .add("toggle on", () => <SVG color={"white"} size={24} {...toggleOn} />);
