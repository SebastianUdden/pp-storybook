import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import NavigationDrawer from "./NavigationDrawer";
import SearchParagraphs from "../searchParagraphs/SearchParagraphs";
import NavigationLink from "../navigationLink/NavigationLink";
import { MOCK_PARAGRAPHS } from "../../constants/mocks";
import { DP6, MAIN_THEME } from "../../constants/theme";
import { insertPhoto } from "../../svgs/editor/insert-photo";
import { star } from "../../svgs/toggle/star";
import { schedule } from "../../svgs/actions/schedule";
import { supervisorAccount } from "../../svgs/actions/supervisor-account";
import AppBarTop from "../appBarTop/AppBarTop";
import ActionItem from "../actionItem/ActionItem";
import { menu } from "../../svgs/navigation/menu";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";
import { bookmark } from "../../svgs/actions/bookmark";

const Wrapper = styled.div`
  border: 1px solid transparent;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: x-large;
  margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  padding: 0;
  ${MEDIA_MAX_MEDIUM} {
    margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  }
`;
const H2 = styled.h2`
  margin-bottom: 2rem;
`;

storiesOf("Navigation drawer", module).add("default", () => {
  const [selected, setSelected] = useState("All photos");
  const [hide, setHide] = useState(true);
  return (
    <Wrapper>
      <NavigationDrawer
        boxShadow={DP6}
        color={MAIN_THEME.WHITE.color.foreground}
        backgroundColor={MAIN_THEME.WHITE.color.background}
        onHide={() => setHide(true)}
        hide={hide}
        buttonElementId="hamburger-menu"
      >
        <H2>{selected}</H2>
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={insertPhoto}
          title="All photos"
          onClick={() => setSelected("All photos")}
          selected={selected === "All photos"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisorAccount}
          title="Shared with me"
          onClick={() => setSelected("Shared with me")}
          selected={selected === "Shared with me"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={star}
          title="Starred"
          onClick={() => setSelected("Starred")}
          selected={selected === "Starred"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={schedule}
          title="Recent"
          onClick={() => setSelected("Recent")}
          selected={selected === "Recent"}
        />
        <hr />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 1"
          onClick={() => setSelected("Chapter 1")}
          selected={selected === "Chapter 1"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 2"
          onClick={() => setSelected("Chapter 2")}
          selected={selected === "Chapter 2"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 3"
          onClick={() => setSelected("Chapter 3")}
          selected={selected === "Chapter 3"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 4"
          onClick={() => setSelected("Chapter 4")}
          selected={selected === "Chapter 4"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 5"
          onClick={() => setSelected("Chapter 5")}
          selected={selected === "Chapter 5"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 6"
          onClick={() => setSelected("Chapter 6")}
          selected={selected === "Chapter 6"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 7"
          onClick={() => setSelected("Chapter 7")}
          selected={selected === "Chapter 7"}
        />
      </NavigationDrawer>
      <AppBarTop>
        <InnerWrapper>
          <ActionItem
            id="hamburger-menu"
            svg={menu}
            onClick={() => setHide(false)}
          />
          <Title>Navigation test</Title>
        </InnerWrapper>
      </AppBarTop>
      <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />
    </Wrapper>
  );
});
