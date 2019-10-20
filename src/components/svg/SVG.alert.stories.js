import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { addAlert } from "../../svgs/alert/add-alert";
import { error } from "../../svgs/alert/error";
import { errorOutline } from "../../svgs/alert/error-outline";
import { notificationImportant } from "../../svgs/alert/notification-important";
import { warning } from "../../svgs/alert/warning";

storiesOf("SVG alert", module)
  .add("all icons", () => (
    <>
      <SVG color={"white"} size={24} {...addAlert} />
      <SVG color={"white"} size={24} {...error} />
      <SVG color={"white"} size={24} {...errorOutline} />
      <SVG color={"white"} size={24} {...notificationImportant} />
      <SVG color={"white"} size={24} {...warning} />
    </>
  ))
  .add("add alert", () => <SVG color={"white"} size={24} {...addAlert} />)
  .add("error", () => <SVG color={"white"} size={24} {...error} />)
  .add("error outline", () => (
    <SVG color={"white"} size={24} {...errorOutline} />
  ))
  .add("notification important", () => (
    <SVG color={"white"} size={24} {...notificationImportant} />
  ))
  .add("warning", () => <SVG color={"white"} size={24} {...warning} />);
