import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextButton from "./TextButton";
import OutlineButton from "./OutlineButton";
import ContainedButton from "./ContainedButton";
import ToggleButton from "./ToggleButton";
import FabButton from "./FabButton";
import { plus } from "../../svgs/plus";
import SVG from "../svg/SVG";

storiesOf("Button", module)
  .add("text", () => (
    <TextButton
      onClick={action("clicked")}
      color="#FF00AA"
      backgroundColorHover="#222222"
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
      color="#FF00AA"
      backgroundColorHover="#666666"
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
      color="#FFFFFF"
      backgroundColor="#FF00AA"
      backgroundColorHover="#FF22BB"
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
          color="#FFFFFF"
          backgroundColor="#FF00AA"
          backgroundColorHover="#FF22BB"
          selected={selectedButton === 1}
        >
          Toggle 1
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(2)}
          color="#FFFFFF"
          backgroundColor="#FF00AA"
          backgroundColorHover="#FF22BB"
          selected={selectedButton === 2}
        >
          Toggle 2
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(3)}
          color="#FFFFFF"
          backgroundColor="#FF00AA"
          backgroundColorHover="#FF22BB"
          selected={selectedButton === 3}
          disabled
        >
          Toggle 3
        </ToggleButton>
        <ToggleButton
          onClick={() => setSelectedButton(4)}
          color="#FFFFFF"
          backgroundColor="#FF00AA"
          backgroundColorHover="#FF22BB"
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
      color="#FFFFFF"
      backgroundColor="#7700FF"
      backgroundColorHover="#8632FF"
    >
      <SVG color={"white"} {...plus} size={24} />
    </FabButton>
  ));
