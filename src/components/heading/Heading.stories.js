import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";
import { MAIN_THEME } from "../../constants/theme";

storiesOf("Heading", module).add("default", () => (
  <Heading level={1} primaryColor={MAIN_THEME.PRIMARY.color.background}>
    A title
  </Heading>
));
