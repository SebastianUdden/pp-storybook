import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { copyMe } from "../../svgs/editor/zCOPY_ME";
import { addComment } from "../../svgs/editor/add-comment";
import { attachFile } from "../../svgs/editor/attach-file";
import { attachMoney } from "../../svgs/editor/attach-money";
import { barChart } from "../../svgs/editor/bar-chart";
import { borderAll } from "../../svgs/editor/border-all";
import { borderBottom } from "../../svgs/editor/border-bottom";
import { borderClear } from "../../svgs/editor/border-clear";
import { borderHorizontal } from "../../svgs/editor/border-horizontal";
import { borderInner } from "../../svgs/editor/border-inner";
import { borderLeft } from "../../svgs/editor/border-left";
import { borderOuter } from "../../svgs/editor/border-outer";
import { borderRight } from "../../svgs/editor/border-right";
import { borderStyle } from "../../svgs/editor/border-style";
import { borderTop } from "../../svgs/editor/border-top";
import { borderVertical } from "../../svgs/editor/border-vertical";
import { bubbleChart } from "../../svgs/editor/bubble-chart";
import { dragHandle } from "../../svgs/editor/drag-handle";
import { formatAlignCenter } from "../../svgs/editor/format-align-center";
import { formatAlignJustify } from "../../svgs/editor/format-align-justify";

storiesOf("SVG editor", module)
  .add("add comment", () => <SVG color={"white"} size={24} {...addComment} />)
  .add("attach file", () => <SVG color={"white"} size={24} {...attachFile} />)
  .add("attach money", () => <SVG color={"white"} size={24} {...attachMoney} />)
  .add("bar chart", () => <SVG color={"white"} size={24} {...barChart} />)
  .add("border all", () => <SVG color={"white"} size={24} {...borderAll} />)
  .add("border bottom", () => (
    <SVG color={"white"} size={24} {...borderBottom} />
  ))
  .add("border clear", () => <SVG color={"white"} size={24} {...borderClear} />)
  .add("border horizontal", () => (
    <SVG color={"white"} size={24} {...borderHorizontal} />
  ))
  .add("border inner", () => <SVG color={"white"} size={24} {...borderInner} />)
  .add("border left", () => <SVG color={"white"} size={24} {...borderLeft} />)
  .add("border outer", () => <SVG color={"white"} size={24} {...borderOuter} />)
  .add("border right", () => <SVG color={"white"} size={24} {...borderRight} />)
  .add("border style", () => <SVG color={"white"} size={24} {...borderStyle} />)
  .add("border top", () => <SVG color={"white"} size={24} {...borderTop} />)
  .add("border vertical", () => (
    <SVG color={"white"} size={24} {...borderVertical} />
  ))
  .add("bubble chart", () => <SVG color={"white"} size={24} {...bubbleChart} />)
  .add("drag handle", () => <SVG color={"white"} size={24} {...dragHandle} />)
  .add("format align center", () => (
    <SVG color={"white"} size={24} {...formatAlignCenter} />
  ))
  .add("format align justify", () => (
    <SVG color={"white"} size={24} {...formatAlignJustify} />
  ))
  .add("COPY_ME", () => <SVG color={"white"} size={24} {...copyMe} />)
  .add("END", () => <SVG color={"white"} size={24} {...copyMe} />);
