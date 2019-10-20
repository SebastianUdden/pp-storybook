import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { copyMe } from "../../svgs/editor/zCOPY_ME";
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
      <SVG color={"white"} size={24} {...add} />
      <SVG color={"white"} size={24} {...addBox} />
      <SVG color={"white"} size={24} {...addCircle} />
      <SVG color={"white"} size={24} {...addCircleOutline} />
      <SVG color={"white"} size={24} {...ampStories} />
      <SVG color={"white"} size={24} {...archive} />
      <SVG color={"white"} size={24} {...backspace} />
      <SVG color={"white"} size={24} {...ballot} />
      <SVG color={"white"} size={24} {...block} />
      <SVG color={"white"} size={24} {...clear} />
      <SVG color={"white"} size={24} {...create} />
      <SVG color={"white"} size={24} {...deleteSweep} />
      <SVG color={"white"} size={24} {...drafts} />
      <SVG color={"white"} size={24} {...dynamicFeed} />
      <SVG color={"white"} size={24} {...fileCopy} />
      <SVG color={"white"} size={24} {...filterList} />
      <SVG color={"white"} size={24} {...flag} />
      <SVG color={"white"} size={24} {...flagOutline} />
      <SVG color={"white"} size={24} {...fontDownload} />
      <SVG color={"white"} size={24} {...forward} />
      <SVG color={"white"} size={24} {...gesture} />
      <SVG color={"white"} size={24} {...howToRegister} />
      <SVG color={"white"} size={24} {...howToVote} />
      <SVG color={"white"} size={24} {...inbox} />
      <SVG color={"white"} size={24} {...link} />
      <SVG color={"white"} size={24} {...linkOff} />
      <SVG color={"white"} size={24} {...lowPriority} />
      <SVG color={"white"} size={24} {...mail} />
      <SVG color={"white"} size={24} {...moveToInbox} />
      <SVG color={"white"} size={24} {...nextWeek} />
      <SVG color={"white"} size={24} {...policy} />
      <SVG color={"white"} size={24} {...redo} />
      <SVG color={"white"} size={24} {...remove} />
      <SVG color={"white"} size={24} {...removeCircle} />
      <SVG color={"white"} size={24} {...removeCircleOutline} />
      <SVG color={"white"} size={24} {...reply} />
      <SVG color={"white"} size={24} {...replyAll} />
      <SVG color={"white"} size={24} {...report} />
      <SVG color={"white"} size={24} {...reportOff} />
      <SVG color={"white"} size={24} {...save} />
      <SVG color={"white"} size={24} {...saveAlt} />
      <SVG color={"white"} size={24} {...selectAll} />
      <SVG color={"white"} size={24} {...send} />
      <SVG color={"white"} size={24} {...sort} />
      <SVG color={"white"} size={24} {...squareMeter} />
      <SVG color={"white"} size={24} {...textFormat} />
      <SVG color={"white"} size={24} {...unarchive} />
      <SVG color={"white"} size={24} {...undo} />
      <SVG color={"white"} size={24} {...waves} />
      <SVG color={"white"} size={24} {...whereToVote} />
      <SVG color={"white"} size={24} {...copyMe} />
      <SVG color={"white"} size={24} {...copyMe} />
    </>
  ))
  .add("add", () => <SVG color={"white"} size={24} {...add} />)
  .add("add box", () => <SVG color={"white"} size={24} {...addBox} />)
  .add("add circle", () => <SVG color={"white"} size={24} {...addCircle} />)
  .add("add circle outline", () => (
    <SVG color={"white"} size={24} {...addCircleOutline} />
  ))
  .add("amp stories", () => <SVG color={"white"} size={24} {...ampStories} />)
  .add("archive", () => <SVG color={"white"} size={24} {...archive} />)
  .add("backspace", () => <SVG color={"white"} size={24} {...backspace} />)
  .add("ballot", () => <SVG color={"white"} size={24} {...ballot} />)
  .add("block", () => <SVG color={"white"} size={24} {...block} />)
  .add("clear", () => <SVG color={"white"} size={24} {...clear} />)
  .add("create", () => <SVG color={"white"} size={24} {...create} />)
  .add("delete sweep", () => <SVG color={"white"} size={24} {...deleteSweep} />)
  .add("drafts", () => <SVG color={"white"} size={24} {...drafts} />)
  .add("dynamic feed", () => <SVG color={"white"} size={24} {...dynamicFeed} />)
  .add("file copy", () => <SVG color={"white"} size={24} {...fileCopy} />)
  .add("filter list", () => <SVG color={"white"} size={24} {...filterList} />)
  .add("flag", () => <SVG color={"white"} size={24} {...flag} />)
  .add("flag outline", () => <SVG color={"white"} size={24} {...flagOutline} />)
  .add("font download", () => (
    <SVG color={"white"} size={24} {...fontDownload} />
  ))
  .add("forward", () => <SVG color={"white"} size={24} {...forward} />)
  .add("gesture", () => <SVG color={"white"} size={24} {...gesture} />)
  .add("how to register", () => (
    <SVG color={"white"} size={24} {...howToRegister} />
  ))
  .add("how to vote", () => <SVG color={"white"} size={24} {...howToVote} />)
  .add("inbox", () => <SVG color={"white"} size={24} {...inbox} />)
  .add("link", () => <SVG color={"white"} size={24} {...link} />)
  .add("link off", () => <SVG color={"white"} size={24} {...linkOff} />)
  .add("low priority", () => <SVG color={"white"} size={24} {...lowPriority} />)
  .add("mail", () => <SVG color={"white"} size={24} {...mail} />)
  .add("move to inbox", () => (
    <SVG color={"white"} size={24} {...moveToInbox} />
  ))
  .add("next week", () => <SVG color={"white"} size={24} {...nextWeek} />)
  .add("policy", () => <SVG color={"white"} size={24} {...policy} />)
  .add("redo", () => <SVG color={"white"} size={24} {...redo} />)
  .add("remove", () => <SVG color={"white"} size={24} {...remove} />)
  .add("remove circle", () => (
    <SVG color={"white"} size={24} {...removeCircle} />
  ))
  .add("remove circle outline", () => (
    <SVG color={"white"} size={24} {...removeCircleOutline} />
  ))
  .add("reply", () => <SVG color={"white"} size={24} {...reply} />)
  .add("reply all", () => <SVG color={"white"} size={24} {...replyAll} />)
  .add("report", () => <SVG color={"white"} size={24} {...report} />)
  .add("report off", () => <SVG color={"white"} size={24} {...reportOff} />)
  .add("save", () => <SVG color={"white"} size={24} {...save} />)
  .add("save alt", () => <SVG color={"white"} size={24} {...saveAlt} />)
  .add("select all", () => <SVG color={"white"} size={24} {...selectAll} />)
  .add("send", () => <SVG color={"white"} size={24} {...send} />)
  .add("sort", () => <SVG color={"white"} size={24} {...sort} />)
  .add("square meter", () => <SVG color={"white"} size={24} {...squareMeter} />)
  .add("text format", () => <SVG color={"white"} size={24} {...textFormat} />)
  .add("unarchive", () => <SVG color={"white"} size={24} {...unarchive} />)
  .add("undo", () => <SVG color={"white"} size={24} {...undo} />)
  .add("waves", () => <SVG color={"white"} size={24} {...waves} />)
  .add("where to vote", () => (
    <SVG color={"white"} size={24} {...whereToVote} />
  ))
  .add("copyMe", () => <SVG color={"white"} size={24} {...copyMe} />)
  .add("copyMe", () => <SVG color={"white"} size={24} {...copyMe} />);
