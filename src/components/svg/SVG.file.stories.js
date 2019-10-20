import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { attachment } from "../../svgs/file/attachment";
import { cloud } from "../../svgs/file/cloud";
import { cloudCircle } from "../../svgs/file/cloud-circle";
import { cloudDone } from "../../svgs/file/cloud-done";
import { cloudDownload } from "../../svgs/file/cloud-download";
import { cloudOff } from "../../svgs/file/cloud-off";
import { cloudQueue } from "../../svgs/file/cloud-queue";
import { cloudUpload } from "../../svgs/file/cloud-upload";
import { createNewFolder } from "../../svgs/file/create-new-folder";
import { folder } from "../../svgs/file/folder";
import { folderOpen } from "../../svgs/file/folder-open";
import { folderShared } from "../../svgs/file/folder-shared";

storiesOf("SVG file", module)
  .add("all icons", () => (
    <>
      <SVG color={"white"} size={24} {...attachment} />
      <SVG color={"white"} size={24} {...cloud} />
      <SVG color={"white"} size={24} {...cloudCircle} />
      <SVG color={"white"} size={24} {...cloudDone} />
      <SVG color={"white"} size={24} {...cloudDownload} />
      <SVG color={"white"} size={24} {...cloudOff} />
      <SVG color={"white"} size={24} {...cloudQueue} />
      <SVG color={"white"} size={24} {...cloudUpload} />
      <SVG color={"white"} size={24} {...createNewFolder} />
      <SVG color={"white"} size={24} {...folder} />
      <SVG color={"white"} size={24} {...folderOpen} />
      <SVG color={"white"} size={24} {...folderShared} />
    </>
  ))
  .add("attachment", () => <SVG color={"white"} size={24} {...attachment} />)
  .add("cloud", () => <SVG color={"white"} size={24} {...cloud} />)
  .add("cloud circle", () => <SVG color={"white"} size={24} {...cloudCircle} />)
  .add("cloud done", () => <SVG color={"white"} size={24} {...cloudDone} />)
  .add("cloud download", () => (
    <SVG color={"white"} size={24} {...cloudDownload} />
  ))
  .add("cloud off", () => <SVG color={"white"} size={24} {...cloudOff} />)
  .add("cloud queue", () => <SVG color={"white"} size={24} {...cloudQueue} />)
  .add("cloud upload", () => <SVG color={"white"} size={24} {...cloudUpload} />)
  .add("create new folder", () => (
    <SVG color={"white"} size={24} {...createNewFolder} />
  ))
  .add("folder", () => <SVG color={"white"} size={24} {...folder} />)
  .add("folder open", () => <SVG color={"white"} size={24} {...folderOpen} />)
  .add("folder shared", () => (
    <SVG color={"white"} size={24} {...folderShared} />
  ));
