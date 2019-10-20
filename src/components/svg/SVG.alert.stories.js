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
      <SVG {...addAlert} />
      <SVG {...error} />
      <SVG {...errorOutline} />
      <SVG {...notificationImportant} />
      <SVG {...warning} />
    </>
  ))
  .add("add alert", () => <SVG {...addAlert} />)
  .add("error", () => <SVG {...error} />)
  .add("error outline", () => <SVG {...errorOutline} />)
  .add("notification important", () => <SVG {...notificationImportant} />)
  .add("warning", () => <SVG {...warning} />);
