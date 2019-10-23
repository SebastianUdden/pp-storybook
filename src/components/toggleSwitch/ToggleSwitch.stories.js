import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { MAIN_THEME } from "../../constants/theme";
import ToggleSwitch from "./ToggleSwitch";

storiesOf("Toggle switch", module)
  .add("rounded", () => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleSwitch checked={checked} onClick={() => setChecked(!checked)} />
    );
  })
  .add("squared", () => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleSwitch
        backgroundColor={MAIN_THEME.PRIMARY.color.background}
        rounded={false}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
    );
  });
