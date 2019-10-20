import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

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
import { formatPaint } from "../../svgs/editor/format-paint";
import { formatQuote } from "../../svgs/editor/format-quote";
import { formatShapes } from "../../svgs/editor/format-shapes";
import { formatSize } from "../../svgs/editor/format-size";
import { formatStrikeThrough } from "../../svgs/editor/format-strike-through";
import { formatTextDirection } from "../../svgs/editor/format-text-direction";
import { formatTextDirectionRtl } from "../../svgs/editor/format-text-direction-rtl";
import { formatUnderlined } from "../../svgs/editor/format-underlined";
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
  .add("all icons", () => (
    <>
      <SVG {...addComment} />
      <SVG {...attachFile} />
      <SVG {...attachMoney} />
      <SVG {...barChart} />
      <SVG {...borderAll} />
      <SVG {...borderClear} />
      <SVG {...borderHorizontal} />
      <SVG {...borderVertical} />
      <SVG {...borderInner} />
      <SVG {...borderTop} />
      <SVG {...borderRight} />
      <SVG {...borderBottom} />
      <SVG {...borderLeft} />
      <SVG {...borderOuter} />
      <SVG {...borderStyle} />
      <SVG {...bubbleChart} />
      <SVG {...dragHandle} />
      <SVG {...formatAlignCenter} />
      <SVG {...formatAlignJustify} />
      <SVG {...formatAlignLeft} />
      <SVG {...formatAlignRight} />
      <SVG {...formatBold} />
      <SVG {...formatClear} />
      <SVG {...formatColorReset} />
      <SVG {...formatIndentIncrease} />
      <SVG {...formatIndentDecrease} />
      <SVG {...formatItalic} />
      <SVG {...formatLineSpacing} />
      <SVG {...formatListBulleted} />
      <SVG {...formatListNumbered} />
      <SVG {...formatListNumberedRtl} />
      <SVG {...formatPaint} />
      <SVG {...formatQuote} />
      <SVG {...formatShapes} />
      <SVG {...formatSize} />
      <SVG {...formatStrikeThrough} />
      <SVG {...formatTextDirection} />
      <SVG {...formatTextDirectionRtl} />
      <SVG {...formatUnderlined} />
      <SVG {...functions} />
      <SVG {...height} />
      <SVG {...highlight} />
      <SVG {...insertChart} />
      <SVG {...insertChartOutlined} />
      <SVG {...insertComment} />
      <SVG {...insertDriveFile} />
      <SVG {...insertEmoticon} />
      <SVG {...insertInvitation} />
      <SVG {...insertLink} />
      <SVG {...insertPhoto} />
      <SVG {...linearScale} />
      <SVG {...mergeType} />
      <SVG {...modeComment} />
      <SVG {...monetizationOn} />
      <SVG {...moneyOff} />
      <SVG {...multilineChart} />
      <SVG {...notes} />
      <SVG {...pieChart} />
      <SVG {...postAdd} />
      <SVG {...publish} />
      <SVG {...scatterPlot} />
      <SVG {...score} />
      <SVG {...shortText} />
      <SVG {...showChart} />
      <SVG {...spaceBar} />
      <SVG {...strikeThroughS} />
      <SVG {...tableChart} />
      <SVG {...textFields} />
      <SVG {...title} />
      <SVG {...verticalAlignBottom} />
      <SVG {...verticalAlignCenter} />
      <SVG {...verticalAlignTop} />
      <SVG {...wrapText} />
    </>
  ))
  .add("add comment", () => <SVG {...addComment} />)
  .add("attach file", () => <SVG {...attachFile} />)
  .add("attach money", () => <SVG {...attachMoney} />)
  .add("bar chart", () => <SVG {...barChart} />)
  .add("border all", () => <SVG {...borderAll} />)
  .add("border bottom", () => <SVG {...borderBottom} />)
  .add("border clear", () => <SVG {...borderClear} />)
  .add("border horizontal", () => <SVG {...borderHorizontal} />)
  .add("border inner", () => <SVG {...borderInner} />)
  .add("border left", () => <SVG {...borderLeft} />)
  .add("border outer", () => <SVG {...borderOuter} />)
  .add("border right", () => <SVG {...borderRight} />)
  .add("border style", () => <SVG {...borderStyle} />)
  .add("border top", () => <SVG {...borderTop} />)
  .add("border vertical", () => <SVG {...borderVertical} />)
  .add("bubble chart", () => <SVG {...bubbleChart} />)
  .add("drag handle", () => <SVG {...dragHandle} />)
  .add("format align center", () => <SVG {...formatAlignCenter} />)
  .add("format align justify", () => <SVG {...formatAlignJustify} />)
  .add("format align left", () => <SVG {...formatAlignLeft} />)
  .add("format align right", () => <SVG {...formatAlignRight} />)
  .add("format bold", () => <SVG {...formatBold} />)
  .add("format clear", () => <SVG {...formatClear} />)
  .add("format color reset", () => <SVG {...formatColorReset} />)
  .add("format indent increase", () => <SVG {...formatIndentIncrease} />)
  .add("format indent decrease", () => <SVG {...formatIndentDecrease} />)
  .add("format italic", () => <SVG {...formatItalic} />)
  .add("format line spacing", () => <SVG {...formatLineSpacing} />)
  .add("format list bulleted", () => <SVG {...formatListBulleted} />)
  .add("format list numbered", () => <SVG {...formatListNumbered} />)
  .add("format list numbered rtl", () => <SVG {...formatListNumberedRtl} />)
  .add("format paint", () => <SVG {...formatPaint} />)
  .add("format quote", () => <SVG {...formatQuote} />)
  .add("format shapes", () => <SVG {...formatShapes} />)
  .add("format size", () => <SVG {...formatSize} />)
  .add("format strike through", () => <SVG {...formatStrikeThrough} />)
  .add("format text direction", () => <SVG {...formatTextDirection} />)
  .add("format text direction rtl", () => <SVG {...formatTextDirectionRtl} />)
  .add("format underlined", () => <SVG {...formatUnderlined} />)
  .add("functions", () => <SVG {...functions} />)
  .add("height", () => <SVG {...height} />)
  .add("highlight", () => <SVG {...highlight} />)
  .add("insert chart", () => <SVG {...insertChart} />)
  .add("insert chart outlined", () => <SVG {...insertChartOutlined} />)
  .add("insert comment", () => <SVG {...insertComment} />)
  .add("insert drive file", () => <SVG {...insertDriveFile} />)
  .add("insert emoticon", () => <SVG {...insertEmoticon} />)
  .add("insert invitation", () => <SVG {...insertInvitation} />)
  .add("insert link", () => <SVG {...insertLink} />)
  .add("insert photo", () => <SVG {...insertPhoto} />)
  .add("linear scale", () => <SVG {...linearScale} />)
  .add("merge type", () => <SVG {...mergeType} />)
  .add("mode comment", () => <SVG {...modeComment} />)
  .add("monetization on", () => <SVG {...monetizationOn} />)
  .add("money off", () => <SVG {...moneyOff} />)
  .add("multiline chart", () => <SVG {...multilineChart} />)
  .add("notes", () => <SVG {...notes} />)
  .add("pie chart", () => <SVG {...pieChart} />)
  .add("post add", () => <SVG {...postAdd} />)
  .add("publish", () => <SVG {...publish} />)
  .add("scatter plot", () => <SVG {...scatterPlot} />)
  .add("score", () => <SVG {...score} />)
  .add("short text", () => <SVG {...shortText} />)
  .add("show chart", () => <SVG {...showChart} />)
  .add("spacebar", () => <SVG {...spaceBar} />)
  .add("strike through s", () => <SVG {...strikeThroughS} />)
  .add("table chart", () => <SVG {...tableChart} />)
  .add("text fields", () => <SVG {...textFields} />)
  .add("title", () => <SVG {...title} />)
  .add("vertical align bottom", () => <SVG {...verticalAlignBottom} />)
  .add("vertical align center", () => <SVG {...verticalAlignCenter} />)
  .add("vertical align top", () => <SVG {...verticalAlignTop} />)
  .add("wrap text", () => <SVG {...wrapText} />);
