import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextButton from "./TextButton";
import OutlineButton from "./OutlineButton";
import ContainedButton from "./ContainedButton";
import ToggleButton from "./ToggleButton";
import FabButton from "./FabButton";
import { plus } from "../../svgs/generic/plus";
import SVG from "../svg/SVG";
import { MAIN_THEME } from "../../constants/theme";

storiesOf("Button", module)
  .add("text", () => (
    <TextButton
      onClick={action("clicked")}
      color={MAIN_THEME.PRIMARY.color.foreground}
      backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
    >
      Default Text-button
    </TextButton>
  ))
  .add("text disabled", () => (
    <TextButton onClick={action("clicked")} color="#FF00AA" disabled>
      Disabled Text-button
    </TextButton>
  ))
  .add("outline", () => (
    <OutlineButton
      onClick={action("clicked")}
      color={MAIN_THEME.PRIMARY.color.foreground}
      backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
    >
      Default Outline-button
    </OutlineButton>
  ))
  .add("outline disabled", () => (
    <OutlineButton onClick={action("clicked")} color="#FF00AA" disabled>
      Disabled Outline-button
    </OutlineButton>
  ))
  .add("contained", () => (
    <ContainedButton
      onClick={action("clicked")}
      color={MAIN_THEME.PRIMARY.color.foreground}
      backgroundColor={MAIN_THEME.PRIMARY.color.background}
      backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
      // color="#FFFFFF"
      // backgroundColor="#FF00AA"
      // backgroundColorHover="#FF22BB"
    >
      Default Contained-button
    </ContainedButton>
  ))
  .add("contained disabled", () => (
    <ContainedButton
      onClick={action("clicked")}
      color="#FFFFFF"
      backgroundColor="#FF00AA"
      disabled
    >
      Disabled Contained-button
    </ContainedButton>
  ))
  .add("toggle", () => {
    const [selectedButton, setSelectedButton] = useState(2);

    return (
      <div>
        <ToggleButton
          onClick={() => setSelectedButton(1)}
          color={MAIN_THEME.SECONDARY.color.foreground}
          backgroundColor={MAIN_THEME.SECONDARY.color.background}
          backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
          selected={selectedButton === 1}
        >
          Toggle 1
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(2)}
          color={MAIN_THEME.SECONDARY.color.foreground}
          backgroundColor={MAIN_THEME.SECONDARY.color.background}
          backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
          selected={selectedButton === 2}
        >
          Toggle 2
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(3)}
          color={MAIN_THEME.SECONDARY.color.foreground}
          backgroundColor={MAIN_THEME.SECONDARY.color.background}
          backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
          selected={selectedButton === 3}
          disabled
        >
          Toggle 3
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(4)}
          color={MAIN_THEME.SECONDARY.color.foreground}
          backgroundColor={MAIN_THEME.SECONDARY.color.background}
          backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
          selected={selectedButton === 4}
        >
          Toggle 4
        </ToggleButton>
      </div>
    );
  })
  .add("fab", () => (
    <FabButton
      onClick={action("clicked")}
      color={MAIN_THEME.PRIMARY.color.foreground}
      backgroundColor={MAIN_THEME.PRIMARY.color.background}
      backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
    >
      <SVG color={"white"} {...plus} size={24} />
    </FabButton>
  ))
  .add("fab black", () => (
    <FabButton
      onClick={action("clicked")}
      color="#FFFFFF"
      backgroundColor="#000000"
      backgroundColorHover="#111111"
    >
      <SVG color={"white"} {...plus} size={24} />
    </FabButton>
  ))
  .add("fab mini black", () => (
    <FabButton
      onClick={action("clicked")}
      color="#FFFFFF"
      backgroundColor="#000000"
      backgroundColorHover="#111111"
      mini
    >
      <SVG color={"white"} {...plus} size={24} />
    </FabButton>
  ));
