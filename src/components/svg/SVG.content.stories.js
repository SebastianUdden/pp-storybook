import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { add } from "../../svgs/content/add";
import { addBox } from "../../svgs/content/add-box";
import { addCircle } from "../../svgs/content/add-circle";
import { addCircleOutline } from "../../svgs/content/add-circle-outline";
import { ampStories } from "../../svgs/content/amp-stories";
import { archive } from "../../svgs/content/archive";
import { backspace } from "../../svgs/content/backspace";
import { ballot } from "../../svgs/content/ballot";
import { block } from "../../svgs/content/block";
import { clear } from "../../svgs/content/clear";
import { create } from "../../svgs/content/create";
import { deleteSweep } from "../../svgs/content/delete-sweep";
import { drafts } from "../../svgs/content/drafts";
import { dynamicFeed } from "../../svgs/content/dynamic-feed";
import { fileCopy } from "../../svgs/content/file-copy";
import { filterList } from "../../svgs/content/filter-list";
import { flag } from "../../svgs/content/flag";
import { flagOutline } from "../../svgs/content/flag-outline";
import { fontDownload } from "../../svgs/content/font-download";
import { forward } from "../../svgs/content/forward";
import { gesture } from "../../svgs/content/gesture";
import { howToRegister } from "../../svgs/content/how-to-register";
import { howToVote } from "../../svgs/content/how-to-vote";
import { inbox } from "../../svgs/content/inbox";
import { link } from "../../svgs/content/link";
import { linkOff } from "../../svgs/content/link-off";
import { lowPriority } from "../../svgs/content/low-priority";
import { mail } from "../../svgs/content/mail";
import { moveToInbox } from "../../svgs/content/move-to-inbox";
import { nextWeek } from "../../svgs/content/next-week";
import { policy } from "../../svgs/content/policy";
import { redo } from "../../svgs/content/redo";
import { remove } from "../../svgs/content/remove";
import { removeCircle } from "../../svgs/content/remove-circle";
import { removeCircleOutline } from "../../svgs/content/remove-circle-outline";
import { reply } from "../../svgs/content/reply";
import { replyAll } from "../../svgs/content/reply-all";
import { report } from "../../svgs/content/report";
import { reportOff } from "../../svgs/content/report-off";
import { save } from "../../svgs/content/save";
import { saveAlt } from "../../svgs/content/save-alt";
import { selectAll } from "../../svgs/content/select-all";
import { send } from "../../svgs/content/send";
import { sort } from "../../svgs/content/sort";
import { squareMeter } from "../../svgs/content/square-meter";
import { textFormat } from "../../svgs/content/text-format";
import { unarchive } from "../../svgs/content/unarchive";
import { undo } from "../../svgs/content/undo";
import { waves } from "../../svgs/content/waves";
import { whereToVote } from "../../svgs/content/where-to-vote";

storiesOf("SVG content", module)
  .add("all icons", () => (
    <>
      <SVG {...add} />
      <SVG {...addBox} />
      <SVG {...addCircle} />
      <SVG {...addCircleOutline} />
      <SVG {...ampStories} />
      <SVG {...archive} />
      <SVG {...backspace} />
      <SVG {...ballot} />
      <SVG {...block} />
      <SVG {...clear} />
      <SVG {...create} />
      <SVG {...deleteSweep} />
      <SVG {...drafts} />
      <SVG {...dynamicFeed} />
      <SVG {...fileCopy} />
      <SVG {...filterList} />
      <SVG {...flag} />
      <SVG {...flagOutline} />
      <SVG {...fontDownload} />
      <SVG {...forward} />
      <SVG {...gesture} />
      <SVG {...howToRegister} />
      <SVG {...howToVote} />
      <SVG {...inbox} />
      <SVG {...link} />
      <SVG {...linkOff} />
      <SVG {...lowPriority} />
      <SVG {...mail} />
      <SVG {...moveToInbox} />
      <SVG {...nextWeek} />
      <SVG {...policy} />
      <SVG {...redo} />
      <SVG {...remove} />
      <SVG {...removeCircle} />
      <SVG {...removeCircleOutline} />
      <SVG {...reply} />
      <SVG {...replyAll} />
      <SVG {...report} />
      <SVG {...reportOff} />
      <SVG {...save} />
      <SVG {...saveAlt} />
      <SVG {...selectAll} />
      <SVG {...send} />
      <SVG {...sort} />
      <SVG {...squareMeter} />
      <SVG {...textFormat} />
      <SVG {...unarchive} />
      <SVG {...undo} />
      <SVG {...waves} />
      <SVG {...whereToVote} />
    </>
  ))
  .add("add", () => <SVG {...add} />)
  .add("add box", () => <SVG {...addBox} />)
  .add("add circle", () => <SVG {...addCircle} />)
  .add("add circle outline", () => <SVG {...addCircleOutline} />)
  .add("amp stories", () => <SVG {...ampStories} />)
  .add("archive", () => <SVG {...archive} />)
  .add("backspace", () => <SVG {...backspace} />)
  .add("ballot", () => <SVG {...ballot} />)
  .add("block", () => <SVG {...block} />)
  .add("clear", () => <SVG {...clear} />)
  .add("create", () => <SVG {...create} />)
  .add("delete sweep", () => <SVG {...deleteSweep} />)
  .add("drafts", () => <SVG {...drafts} />)
  .add("dynamic feed", () => <SVG {...dynamicFeed} />)
  .add("file copy", () => <SVG {...fileCopy} />)
  .add("filter list", () => <SVG {...filterList} />)
  .add("flag", () => <SVG {...flag} />)
  .add("flag outline", () => <SVG {...flagOutline} />)
  .add("font download", () => <SVG {...fontDownload} />)
  .add("forward", () => <SVG {...forward} />)
  .add("gesture", () => <SVG {...gesture} />)
  .add("how to register", () => <SVG {...howToRegister} />)
  .add("how to vote", () => <SVG {...howToVote} />)
  .add("inbox", () => <SVG {...inbox} />)
  .add("link", () => <SVG {...link} />)
  .add("link off", () => <SVG {...linkOff} />)
  .add("low priority", () => <SVG {...lowPriority} />)
  .add("mail", () => <SVG {...mail} />)
  .add("move to inbox", () => <SVG {...moveToInbox} />)
  .add("next week", () => <SVG {...nextWeek} />)
  .add("policy", () => <SVG {...policy} />)
  .add("redo", () => <SVG {...redo} />)
  .add("remove", () => <SVG {...remove} />)
  .add("remove circle", () => <SVG {...removeCircle} />)
  .add("remove circle outline", () => <SVG {...removeCircleOutline} />)
  .add("reply", () => <SVG {...reply} />)
  .add("reply all", () => <SVG {...replyAll} />)
  .add("report", () => <SVG {...report} />)
  .add("report off", () => <SVG {...reportOff} />)
  .add("save", () => <SVG {...save} />)
  .add("save alt", () => <SVG {...saveAlt} />)
  .add("select all", () => <SVG {...selectAll} />)
  .add("send", () => <SVG {...send} />)
  .add("sort", () => <SVG {...sort} />)
  .add("square meter", () => <SVG {...squareMeter} />)
  .add("text format", () => <SVG {...textFormat} />)
  .add("unarchive", () => <SVG {...unarchive} />)
  .add("undo", () => <SVG {...undo} />)
  .add("waves", () => <SVG {...waves} />)
  .add("where to vote", () => <SVG {...whereToVote} />);
