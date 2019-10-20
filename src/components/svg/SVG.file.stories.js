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
      <SVG {...attachment} />
      <SVG {...cloud} />
      <SVG {...cloudCircle} />
      <SVG {...cloudDone} />
      <SVG {...cloudDownload} />
      <SVG {...cloudOff} />
      <SVG {...cloudQueue} />
      <SVG {...cloudUpload} />
      <SVG {...createNewFolder} />
      <SVG {...folder} />
      <SVG {...folderOpen} />
      <SVG {...folderShared} />
    </>
  ))
  .add("attachment", () => <SVG {...attachment} />)
  .add("cloud", () => <SVG {...cloud} />)
  .add("cloud circle", () => <SVG {...cloudCircle} />)
  .add("cloud done", () => <SVG {...cloudDone} />)
  .add("cloud download", () => <SVG {...cloudDownload} />)
  .add("cloud off", () => <SVG {...cloudOff} />)
  .add("cloud queue", () => <SVG {...cloudQueue} />)
  .add("cloud upload", () => <SVG {...cloudUpload} />)
  .add("create new folder", () => <SVG {...createNewFolder} />)
  .add("folder", () => <SVG {...folder} />)
  .add("folder open", () => <SVG {...folderOpen} />)
  .add("folder shared", () => <SVG {...folderShared} />);
