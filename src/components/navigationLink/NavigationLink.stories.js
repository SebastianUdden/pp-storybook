import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import NavigationLink from "./NavigationLink";
import { search } from "../../svgs/actions/search";
import { insertPhoto } from "../../svgs/editor/insert-photo";
import { star } from "../../svgs/toggle/star";
import { schedule } from "../../svgs/actions/schedule";
import { MAIN_THEME } from "../../constants/theme";

const Wrapper = styled.div`
  width: 95%;
`;

storiesOf("Navigation link", module)
  .add("default", () => (
    <Wrapper>
      <NavigationLink svg={search} title="Search" />
    </Wrapper>
  ))
  .add("multiple", () => (
    <Wrapper>
      <NavigationLink
        backgroundColor={MAIN_THEME.PRIMARY.color.background}
        colorHover={MAIN_THEME.PRIMARY.color.background}
        color={MAIN_THEME.BLACK.color.foreground}
        svg={search}
        title="Search"
      />
      <NavigationLink
        backgroundColor={MAIN_THEME.PRIMARY.color.background}
        colorHover={MAIN_THEME.PRIMARY.color.background}
        color={MAIN_THEME.BLACK.color.foreground}
        svg={insertPhoto}
        title="Insert photo"
      />
      <NavigationLink
        backgroundColor={MAIN_THEME.PRIMARY.color.background}
        colorHover={MAIN_THEME.PRIMARY.color.background}
        color={MAIN_THEME.BLACK.color.foreground}
        svg={star}
        title="Star"
      />
      <NavigationLink
        backgroundColor={MAIN_THEME.PRIMARY.color.background}
        colorHover={MAIN_THEME.PRIMARY.color.background}
        color={MAIN_THEME.BLACK.color.foreground}
        svg={schedule}
        title="Schedule"
      />
    </Wrapper>
  ));
