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
  .add("all icons", () => (
    <>
      <SVG {...apps} />
      <SVG {...arrowBack} />
      <SVG {...arrowBackIos} />
      <SVG {...arrowDown} />
      <SVG {...arrowDropDown} />
      <SVG {...arrowDropDownCircle} />
      <SVG {...arrowDropUp} />
      <SVG {...arrowForward} />
      <SVG {...arrowForwardIos} />
      <SVG {...arrowLeft} />
      <SVG {...arrowRight} />
      <SVG {...arrowUpward} />
      <SVG {...cancel} />
      <SVG {...check} />
      <SVG {...chevronLeft} />
      <SVG {...chevronRight} />
      <SVG {...close} />
      <SVG {...doubleArrow} />
      <SVG {...expandLess} />
      <SVG {...expandMore} />
      <SVG {...firstPage} />
      <SVG {...fullscreen} />
      <SVG {...fullscreenExit} />
      <SVG {...homeWork} />
      <SVG {...lastPage} />
      <SVG {...menu} />
      <SVG {...menuOpen} />
      <SVG {...moreHorizontal} />
      <SVG {...moreVertical} />
      <SVG {...refresh} />
      <SVG {...subdirectoryArrowLeft} />
      <SVG {...subdirectoryArrowRight} />
      <SVG {...unfoldLess} />
      <SVG {...unfoldMore} />
    </>
  ))
  .add("apps", () => <SVG {...apps} />)
  .add("arrow back", () => <SVG {...arrowBack} />)
  .add("arrow back ios", () => <SVG {...arrowBackIos} />)
  .add("arrow down", () => <SVG {...arrowDown} />)
  .add("arrow drop down", () => <SVG {...arrowDropDown} />)
  .add("arrow drop down circle", () => <SVG {...arrowDropDownCircle} />)
  .add("arrow drop up", () => <SVG {...arrowDropUp} />)
  .add("arrow forward", () => <SVG {...arrowForward} />)
  .add("arrow forward ios", () => <SVG {...arrowForwardIos} />)
  .add("arrow left", () => <SVG {...arrowLeft} />)
  .add("arrow right", () => <SVG {...arrowRight} />)
  .add("arrow upward", () => <SVG {...arrowUpward} />)
  .add("cancel", () => <SVG {...cancel} />)
  .add("check", () => <SVG {...check} />)
  .add("chevron left", () => <SVG {...chevronLeft} />)
  .add("chevron right", () => <SVG {...chevronRight} />)
  .add("close", () => <SVG {...close} />)
  .add("double arrow", () => <SVG {...doubleArrow} />)
  .add("expand less", () => <SVG {...expandLess} />)
  .add("expand more", () => <SVG {...expandMore} />)
  .add("first page", () => <SVG {...firstPage} />)
  .add("fullscreen", () => <SVG {...fullscreen} />)
  .add("fullscreen exit", () => <SVG {...fullscreenExit} />)
  .add("home/work", () => <SVG {...homeWork} />)
  .add("last page", () => <SVG {...lastPage} />)
  .add("menu", () => <SVG {...menu} />)
  .add("menu open", () => <SVG {...menuOpen} />)
  .add("more horizontal", () => <SVG {...moreHorizontal} />)
  .add("more vertical", () => <SVG {...moreVertical} />)
  .add("refresh", () => <SVG {...refresh} />)
  .add("subdirectory arrow left", () => <SVG {...subdirectoryArrowLeft} />)
  .add("subdirectory arrow right", () => <SVG {...subdirectoryArrowRight} />)
  .add("unfold less", () => <SVG {...unfoldLess} />)
  .add("unfold more", () => <SVG {...unfoldMore} />);
