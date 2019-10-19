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
import { formatAlignLeft } from "../../svgs/editor/format-align-left";
import { formatAlignRight } from "../../svgs/editor/format-align-right";
import { formatBold } from "../../svgs/editor/format-bold";
import { formatClear } from "../../svgs/editor/format-clear";
import { formatColorReset } from "../../svgs/editor/format-color-reset";
import { formatIndentDecrease } from "../../svgs/editor/format-indent-decrease";
import { formatIndentIncrease } from "../../svgs/editor/format-indent-increase";
import { formatItalic } from "../../svgs/editor/format-italic";
import { formatLineSpacing } from "../../svgs/editor/format-line-spacing";
import { formatListBulleted } from "../../svgs/editor/format-list-bulleted";
import { formatListNumbered } from "../../svgs/editor/format-list-numbered";
import { formatListNumberedRtl } from "../../svgs/editor/format-list-numbered-rtl";
import { formatPaint } from "../../svgs/editor/formatPaint";
import { formatQuote } from "../../svgs/editor/formatQuote";
import { formatShapes } from "../../svgs/editor/formatShapes";
import { formatSize } from "../../svgs/editor/formatSize";
import { formatStrikeThrough } from "../../svgs/editor/formatStrikeThrough";
import { formatTextDirection } from "../../svgs/editor/formatTextDirection";
import { formatTextDirectionRtl } from "../../svgs/editor/formatTextDirectionRtl";
import { formatUnderlined } from "../../svgs/editor/formatUnderlined";
import { functions } from "../../svgs/editor/functions";
import { height } from "../../svgs/editor/height";
import { highlight } from "../../svgs/editor/highlight";
import { insertChart } from "../../svgs/editor/insert-chart";
import { insertChartOutlined } from "../../svgs/editor/insert-chart-outlined";
import { insertComment } from "../../svgs/editor/insert-comment";
import { insertDriveFile } from "../../svgs/editor/insert-drive-file";
import { insertEmoticon } from "../../svgs/editor/insert-emoticon";
import { insertInvitation } from "../../svgs/editor/insert-invitation";
import { insertLink } from "../../svgs/editor/insert-link";
import { insertPhoto } from "../../svgs/editor/insert-photo";
import { linearScale } from "../../svgs/editor/linear-scale";
import { mergeType } from "../../svgs/editor/merge-type";
import { modeComment } from "../../svgs/editor/mode-comment";
import { monetizationOn } from "../../svgs/editor/monetization-on";
import { moneyOff } from "../../svgs/editor/money-off";
import { multilineChart } from "../../svgs/editor/multiline-chart";
import { notes } from "../../svgs/editor/notes";
import { pieChart } from "../../svgs/editor/pie-chart";
import { postAdd } from "../../svgs/editor/post-add";
import { publish } from "../../svgs/editor/publish";
import { scatterPlot } from "../../svgs/editor/scatter-plot";
import { score } from "../../svgs/editor/score";
import { shortText } from "../../svgs/editor/short-text";
import { showChart } from "../../svgs/editor/show-chart";
import { spaceBar } from "../../svgs/editor/space-bar";
import { strikeThroughS } from "../../svgs/editor/strike-through-s";
import { tableChart } from "../../svgs/editor/table-chart";
import { textFields } from "../../svgs/editor/text-fields";
import { title } from "../../svgs/editor/title";
import { verticalAlignBottom } from "../../svgs/editor/vertical-align-bottom";
import { verticalAlignCenter } from "../../svgs/editor/vertical-align-center";
import { verticalAlignTop } from "../../svgs/editor/vertical-align-top";
import { wrapText } from "../../svgs/editor/wrap-text";

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
  .add("format align left", () => (
    <SVG color={"white"} size={24} {...formatAlignLeft} />
  ))
  .add("format align right", () => (
    <SVG color={"white"} size={24} {...formatAlignRight} />
  ))
  .add("format bold", () => <SVG color={"white"} size={24} {...formatBold} />)
  .add("format clear", () => <SVG color={"white"} size={24} {...formatClear} />)
  .add("format color reset", () => (
    <SVG color={"white"} size={24} {...formatColorReset} />
  ))
  .add("format indent increase", () => (
    <SVG color={"white"} size={24} {...formatIndentIncrease} />
  ))
  .add("format indent decrease", () => (
    <SVG color={"white"} size={24} {...formatIndentDecrease} />
  ))
  .add("format italic", () => (
    <SVG color={"white"} size={24} {...formatItalic} />
  ))
  .add("format line spacing", () => (
    <SVG color={"white"} size={24} {...formatLineSpacing} />
  ))
  .add("format list bulleted", () => (
    <SVG color={"white"} size={24} {...formatListBulleted} />
  ))
  .add("format list numbered", () => (
    <SVG color={"white"} size={24} {...formatListNumbered} />
  ))
  .add("format list numbered rtl", () => (
    <SVG color={"white"} size={24} {...formatListNumberedRtl} />
  ))
  .add("format paint", () => <SVG color={"white"} size={24} {...formatPaint} />)
  .add("format quote", () => <SVG color={"white"} size={24} {...formatQuote} />)
  .add("format shapes", () => (
    <SVG color={"white"} size={24} {...formatShapes} />
  ))
  .add("format size", () => <SVG color={"white"} size={24} {...formatSize} />)
  .add("format strike through", () => (
    <SVG color={"white"} size={24} {...formatStrikeThrough} />
  ))
  .add("format text direction", () => (
    <SVG color={"white"} size={24} {...formatTextDirection} />
  ))
  .add("format text direction rtl", () => (
    <SVG color={"white"} size={24} {...formatTextDirectionRtl} />
  ))
  .add("format underlined", () => (
    <SVG color={"white"} size={24} {...formatUnderlined} />
  ))
  .add("functions", () => <SVG color={"white"} size={24} {...functions} />)
  .add("height", () => <SVG color={"white"} size={24} {...height} />)
  .add("highlight", () => <SVG color={"white"} size={24} {...highlight} />)
  .add("insert chart", () => <SVG color={"white"} size={24} {...insertChart} />)
  .add("insert chart outlined", () => (
    <SVG color={"white"} size={24} {...insertChartOutlined} />
  ))
  .add("insert comment", () => (
    <SVG color={"white"} size={24} {...insertComment} />
  ))
  .add("insert drive file", () => (
    <SVG color={"white"} size={24} {...insertDriveFile} />
  ))
  .add("insert emoticon", () => (
    <SVG color={"white"} size={24} {...insertEmoticon} />
  ))
  .add("insert invitation", () => (
    <SVG color={"white"} size={24} {...insertInvitation} />
  ))
  .add("insert link", () => <SVG color={"white"} size={24} {...insertLink} />)
  .add("insert photo", () => <SVG color={"white"} size={24} {...insertPhoto} />)
  .add("linear scale", () => <SVG color={"white"} size={24} {...linearScale} />)
  .add("merge type", () => <SVG color={"white"} size={24} {...mergeType} />)
  .add("mode comment", () => <SVG color={"white"} size={24} {...modeComment} />)
  .add("monetization on", () => (
    <SVG color={"white"} size={24} {...monetizationOn} />
  ))
  .add("money off", () => <SVG color={"white"} size={24} {...moneyOff} />)
  .add("multiline chart", () => (
    <SVG color={"white"} size={24} {...multilineChart} />
  ))
  .add("notes", () => <SVG color={"white"} size={24} {...notes} />)
  .add("pie chart", () => <SVG color={"white"} size={24} {...pieChart} />)
  .add("post add", () => <SVG color={"white"} size={24} {...postAdd} />)
  .add("publish", () => <SVG color={"white"} size={24} {...publish} />)
  .add("scatter plot", () => <SVG color={"white"} size={24} {...scatterPlot} />)
  .add("score", () => <SVG color={"white"} size={24} {...score} />)
  .add("short text", () => <SVG color={"white"} size={24} {...shortText} />)
  .add("show chart", () => <SVG color={"white"} size={24} {...showChart} />)
  .add("spacebar", () => <SVG color={"white"} size={24} {...spaceBar} />)
  .add("strike through s", () => (
    <SVG color={"white"} size={24} {...strikeThroughS} />
  ))
  .add("table chart", () => <SVG color={"white"} size={24} {...tableChart} />)
  .add("text fields", () => <SVG color={"white"} size={24} {...textFields} />)
  .add("title", () => <SVG color={"white"} size={24} {...title} />)
  .add("vertical align bottom", () => (
    <SVG color={"white"} size={24} {...verticalAlignBottom} />
  ))
  .add("vertical align center", () => (
    <SVG color={"white"} size={24} {...verticalAlignCenter} />
  ))
  .add("vertical align top", () => (
    <SVG color={"white"} size={24} {...verticalAlignTop} />
  ))
  .add("wrap text", () => <SVG color={"white"} size={24} {...wrapText} />)
  .add("copyMe", () => <SVG color={"white"} size={24} {...copyMe} />)
  .add("END", () => <SVG color={"white"} size={24} {...copyMe} />);
