import React from "react";
import { storiesOf } from "@storybook/react";

import ActionItem from "./ActionItem";
import { search } from "../../svgs/actions/search";

storiesOf("Action item", module)
  .add("default", () => <ActionItem svg={search} />)
  .add("with hover", () => (
    <ActionItem svg={search} backgroundColorHover="#666666" />
  ));
