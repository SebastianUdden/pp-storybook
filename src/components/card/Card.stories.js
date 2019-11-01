import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Card from "./Card";
import TextButton from "../button/TextButton";
import { MAIN_THEME } from "../../constants/theme";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import SVG from "../svg/SVG";
import { favorite } from "../../svgs/actions/favorite";

const SVGWrapper = styled.span`
  cursor: pointer;
`;

storiesOf("Card", module)
  .add("full card example", () => (
    <Card
      title="Card title"
      secondaryText="Secondary text"
      supportingText="Greyhound divisively hello coldly wonderfully marginally far upon excluding."
      image={{
        src:
          "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
        alt: "test"
      }}
      buttons={
        <>
          <TextButton
            color={MAIN_THEME.PRIMARY.color.background}
            backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
            fontWeight={900}
            fontSize="small"
            small
          >
            Action 1
          </TextButton>
          <TextButton
            color={MAIN_THEME.PRIMARY.color.background}
            backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
            fontWeight={900}
            fontSize="small"
            small
          >
            Action 2
          </TextButton>
        </>
      }
      icons={
        <>
          <SVGWrapper>
            <SVG {...favorite} color={MAIN_THEME.WHITE.color.foreground} />
          </SVGWrapper>
          <SVGWrapper>
            <SVG {...moreVertical} color={MAIN_THEME.WHITE.color.foreground} />
          </SVGWrapper>
        </>
      }
    />
  ))
  .add("simple", () => (
    <Card title="Card title" secondaryText="Secondary text" />
  ))
  .add("with description", () => (
    <Card
      title="Card title"
      secondaryText="Secondary text"
      supportingText="Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    />
  ))
  .add("with buttons", () => (
    <Card
      title="Card title"
      secondaryText="Secondary text"
      buttons={
        <>
          <TextButton
            color={MAIN_THEME.PRIMARY.color.background}
            backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
            fontWeight={900}
            fontSize="small"
            small
          >
            Action 1
          </TextButton>
          <TextButton
            color={MAIN_THEME.PRIMARY.color.background}
            backgroundColorHover={MAIN_THEME.PRIMARY.color.background}
            fontWeight={900}
            fontSize="small"
            small
          >
            Action 2
          </TextButton>
        </>
      }
    />
  ))
  .add("with image", () => (
    <Card
      title="Card title"
      secondaryText="Secondary text"
      image={{
        src:
          "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
        alt: "test"
      }}
    />
  ));
