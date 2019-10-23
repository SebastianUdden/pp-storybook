import React from "react";
import { storiesOf } from "@storybook/react";

import ColoredBox from "./ColoredBox";

storiesOf("Colored box", module).add("default", () => (
  <ColoredBox backgroundColor="#666666" />
));
