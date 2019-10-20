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
  .add("all icons", () => (
    <>
      <SVG {...checkBox} />
      <SVG {...checkBoxOutlineBlank} />
      <SVG {...indeterminateCheckBox} />
      <SVG {...radioButtonChecked} />
      <SVG {...radioButtonUnchecked} />
      <SVG {...star} />
      <SVG {...starBorder} />
      <SVG {...starHalf} />
      <SVG {...toggleOff} />
      <SVG {...toggleOn} />
    </>
  ))
  .add("check-box", () => <SVG {...checkBox} />)
  .add("check-box outline blank", () => <SVG {...checkBoxOutlineBlank} />)
  .add("indeterminate check-box", () => <SVG {...indeterminateCheckBox} />)
  .add("radio-button checked", () => <SVG {...radioButtonChecked} />)
  .add("radio-button unchecked", () => <SVG {...radioButtonUnchecked} />)
  .add("star", () => <SVG {...star} />)
  .add("star border", () => <SVG {...starBorder} />)
  .add("star half", () => <SVG {...starHalf} />)
  .add("toggle off", () => <SVG {...toggleOff} />)
  .add("toggle on", () => <SVG {...toggleOn} />);
