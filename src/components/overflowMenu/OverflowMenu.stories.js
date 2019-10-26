import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import OverflowMenu from "./OverflowMenu";
import { accessibility } from "../../svgs/actions/accessibility";
import { accountBox } from "../../svgs/actions/account-box";
import { alarm } from "../../svgs/actions/alarm";
import { MAIN_THEME } from "../../constants/theme";
import FabButton from "../button/FabButton";
import SVG from "../svg/SVG";
import { room } from "../../svgs/actions/room";

const Fab = styled(FabButton)`
  margin: 1rem 0;
  padding: 2rem;
`;

storiesOf("Overflow menu", module)
  .add("toggle down", () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <OverflowMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Fab
          id="Fab 1"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accessibility}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 2"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accountBox}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 3"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...alarm} size={24} />
        </Fab>
        <Fab
          id="Fab 4"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...room} size={24} />
        </Fab>
      </OverflowMenu>
    );
  })
  .add("toggle up", () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <OverflowMenu
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        direction="column-reverse"
      >
        <Fab
          id="Fab 1"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accessibility}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 2"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accountBox}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 3"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...alarm} size={24} />
        </Fab>
        <Fab
          id="Fab 4"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...room} size={24} />
        </Fab>
      </OverflowMenu>
    );
  })
  .add("toggle right", () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <OverflowMenu
        direction="row"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Fab
          id="Fab 1"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accessibility}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 2"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accountBox}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 3"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...alarm} size={24} />
        </Fab>
        <Fab
          id="Fab 4"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...room} size={24} />
        </Fab>
      </OverflowMenu>
    );
  })
  .add("toggle left", () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <OverflowMenu
        direction="row-reverse"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Fab
          id="Fab 1"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accessibility}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 2"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accountBox}
            size={24}
          />
        </Fab>
        <Fab
          id="Fab 3"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...alarm} size={24} />
        </Fab>
        <Fab
          id="Fab 4"
          onClick={e => onClick(e.target.id)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...room} size={24} />
        </Fab>
      </OverflowMenu>
    );
  })
  .add("static", () => (
    <OverflowMenu isOpen={true}>
      <Fab
        id="Fab 1"
        onClick={e => onClick(e.target.id)}
        color={MAIN_THEME.SECONDARY.color.foreground}
        backgroundColor={MAIN_THEME.SECONDARY.color.background}
        backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
      >
        <SVG
          color={MAIN_THEME.SECONDARY.color.foreground}
          {...accessibility}
          size={24}
        />
      </Fab>
      <Fab
        id="Fab 2"
        onClick={e => onClick(e.target.id)}
        color={MAIN_THEME.SECONDARY.color.foreground}
        backgroundColor={MAIN_THEME.SECONDARY.color.background}
        backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
      >
        <SVG
          color={MAIN_THEME.SECONDARY.color.foreground}
          {...accountBox}
          size={24}
        />
      </Fab>
      <Fab
        id="Fab 3"
        onClick={e => onClick(e.target.id)}
        color={MAIN_THEME.SECONDARY.color.foreground}
        backgroundColor={MAIN_THEME.SECONDARY.color.background}
        backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
      >
        <SVG
          color={MAIN_THEME.SECONDARY.color.foreground}
          {...alarm}
          size={24}
        />
      </Fab>
      <Fab
        id="Fab 4"
        onClick={e => onClick(e.target.id)}
        color={MAIN_THEME.SECONDARY.color.foreground}
        backgroundColor={MAIN_THEME.SECONDARY.color.background}
        backgroundColorHover={MAIN_THEME.SECONDARY.color.background}
      >
        <SVG
          color={MAIN_THEME.SECONDARY.color.foreground}
          {...room}
          size={24}
        />
      </Fab>
    </OverflowMenu>
  ));
