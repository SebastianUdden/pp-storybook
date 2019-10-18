import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { apps } from "../../svgs/navigation/apps";
import { arrowBack } from "../../svgs/navigation/arrow-back";
import { arrowBackIos } from "../../svgs/navigation/arrow-back-ios";
import { arrowDown } from "../../svgs/navigation/arrow-down";
import { arrowDropDown } from "../../svgs/navigation/arrow-drop-down";
import { arrowDropDownCircle } from "../../svgs/navigation/arrow-drop-down-circle";
import { arrowDropUp } from "../../svgs/navigation/arrow-drop-up";
import { arrowForward } from "../../svgs/navigation/arrow-forward";
import { arrowForwardIos } from "../../svgs/navigation/arrow-forward-ios";
import { arrowLeft } from "../../svgs/navigation/arrow-left";
import { arrowRight } from "../../svgs/navigation/arrow-right";
import { arrowUpward } from "../../svgs/navigation/arrow-upward";
import { cancel } from "../../svgs/navigation/cancel";
import { check } from "../../svgs/navigation/check";
import { chevronLeft } from "../../svgs/navigation/chevron-left";
import { chevronRight } from "../../svgs/navigation/chevron-right";
import { close } from "../../svgs/navigation/close";
import { doubleArrow } from "../../svgs/navigation/double-arrow";
import { expandLess } from "../../svgs/navigation/expand-less";
import { expandMore } from "../../svgs/navigation/expand-more";
import { firstPage } from "../../svgs/navigation/first-page";
import { fullscreen } from "../../svgs/navigation/fullscreen";
import { fullscreenExit } from "../../svgs/navigation/fullscreen-exit";
import { homeWork } from "../../svgs/navigation/home-work";
import { lastPage } from "../../svgs/navigation/last-page";
import { menu } from "../../svgs/navigation/menu";
import { menuOpen } from "../../svgs/navigation/menu-open";
import { moreHorizontal } from "../../svgs/navigation/more-horizontal";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import { refresh } from "../../svgs/navigation/refresh";
import { subdirectoryArrowLeft } from "../../svgs/navigation/subdirectory-arrow-left";
import { subdirectoryArrowRight } from "../../svgs/navigation/subdirectory-arrow-right";
import { unfoldLess } from "../../svgs/navigation/unfold-less";
import { unfoldMore } from "../../svgs/navigation/unfold-more";

storiesOf("SVG navigation", module)
  .add("apps", () => <SVG color={"white"} size={24} {...apps} />)
  .add("arrow back", () => <SVG color={"white"} size={24} {...arrowBack} />)
  .add("arrow back ios", () => (
    <SVG color={"white"} size={24} {...arrowBackIos} />
  ))
  .add("arrow down", () => <SVG color={"white"} size={24} {...arrowDown} />)
  .add("arrow drop down", () => (
    <SVG color={"white"} size={24} {...arrowDropDown} />
  ))
  .add("arrow drop down circle", () => (
    <SVG color={"white"} size={24} {...arrowDropDownCircle} />
  ))
  .add("arrow drop up", () => (
    <SVG color={"white"} size={24} {...arrowDropUp} />
  ))
  .add("arrow forward", () => (
    <SVG color={"white"} size={24} {...arrowForward} />
  ))
  .add("arrow forward ios", () => (
    <SVG color={"white"} size={24} {...arrowForwardIos} />
  ))
  .add("arrow left", () => <SVG color={"white"} size={24} {...arrowLeft} />)
  .add("arrow right", () => <SVG color={"white"} size={24} {...arrowRight} />)
  .add("arrow upward", () => <SVG color={"white"} size={24} {...arrowUpward} />)
  .add("cancel", () => <SVG color={"white"} size={24} {...cancel} />)
  .add("check", () => <SVG color={"white"} size={24} {...check} />)
  .add("chevron left", () => <SVG color={"white"} size={24} {...chevronLeft} />)
  .add("chevron right", () => (
    <SVG color={"white"} size={24} {...chevronRight} />
  ))
  .add("close", () => <SVG color={"white"} size={24} {...close} />)
  .add("double arrow", () => <SVG color={"white"} size={24} {...doubleArrow} />)
  .add("expand less", () => <SVG color={"white"} size={24} {...expandLess} />)
  .add("expand more", () => <SVG color={"white"} size={24} {...expandMore} />)
  .add("first page", () => <SVG color={"white"} size={24} {...firstPage} />)
  .add("fullscreen", () => <SVG color={"white"} size={24} {...fullscreen} />)
  .add("fullscreen exit", () => (
    <SVG color={"white"} size={24} {...fullscreenExit} />
  ))
  .add("home/work", () => <SVG color={"white"} size={24} {...homeWork} />)
  .add("last page", () => <SVG color={"white"} size={24} {...lastPage} />)
  .add("menu", () => <SVG color={"white"} size={24} {...menu} />)
  .add("menu open", () => <SVG color={"white"} size={24} {...menuOpen} />)
  .add("more horizontal", () => (
    <SVG color={"white"} size={24} {...moreHorizontal} />
  ))
  .add("more vertical", () => (
    <SVG color={"white"} size={24} {...moreVertical} />
  ))
  .add("refresh", () => <SVG color={"white"} size={24} {...refresh} />)
  .add("subdirectory arrow left", () => (
    <SVG color={"white"} size={24} {...subdirectoryArrowLeft} />
  ))
  .add("subdirectory arrow right", () => (
    <SVG color={"white"} size={24} {...subdirectoryArrowRight} />
  ))
  .add("unfold less", () => <SVG color={"white"} size={24} {...unfoldLess} />)
  .add("unfold more", () => <SVG color={"white"} size={24} {...unfoldMore} />);
