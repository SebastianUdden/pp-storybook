import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import AppBarTop from "../appBarTop/AppBarTop";
import { menu } from "../../svgs/navigation/menu";
import { favorite } from "../../svgs/actions/favorite";
import { search } from "../../svgs/actions/search";
import ActionItem from "../actionItem/ActionItem";
import Search from "../search/Search";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";
import SearchSections from "../searchSections/SearchSections";
import { MOCK_SECTIONS } from "../../constants/mocks";
import { MAIN_THEME, DP6 } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";
import NavigationDrawer from "../navigationDrawer/NavigationDrawer";
import NavigationLink from "../navigationLink/NavigationLink";
import { insertPhoto } from "../../svgs/editor/insert-photo";
import { supervisorAccount } from "../../svgs/actions/supervisor-account";
import { star } from "../../svgs/toggle/star";
import { schedule } from "../../svgs/actions/schedule";
import { bookmark } from "../../svgs/actions/bookmark";
import { bookmarks } from "../../svgs/actions/bookmarks";
import OverflowMenu from "../overflowMenu/OverflowMenu";
import FabButton from "../button/FabButton";
import SVG from "../svg/SVG";
import { accountBox } from "../../svgs/actions/account-box";
import { accessibility } from "../../svgs/actions/accessibility";
import { alarm } from "../../svgs/actions/alarm";
import { room } from "../../svgs/actions/room";
import { moreHorizontal } from "../../svgs/navigation/more-horizontal";
import { reply } from "../../svgs/content/reply";

const Wrapper = styled.div`
  border: 1px solid transparent;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.largeSize};
  margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  padding: 0;
  ${MEDIA_MAX_MEDIUM} {
    margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  }
`;

const H2 = styled.h2`
  margin-bottom: 2rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

storiesOf("_App example", module).add("App example", () => {
  const [value, setValue] = useState("farm-to-table");
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [selected, setSelected] = useState("");
  const [hide, setHide] = useState(true);

  const [showOverflow, setShowOverflow] = useState(false);

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
          onClick={() => {
            setHide(true);
            setSelected("All photos");
          }}
          selected={selected === "All photos"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisorAccount}
          title="Shared with me"
          onClick={() => {
            setHide(true);
            setSelected("Shared with me");
          }}
          selected={selected === "Shared with me"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={star}
          title="Starred"
          onClick={() => {
            setHide(true);
            setSelected("Starred");
          }}
          selected={selected === "Starred"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={schedule}
          title="Recent"
          onClick={() => {
            setHide(true);
            setSelected("Recent");
          }}
          selected={selected === "Recent"}
        />
        <hr />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmarks}
          title="All chapters"
          onClick={() => {
            setHide(true);
            setSelected("");
          }}
          selected={selected === ""}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 1"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 1");
          }}
          selected={selected === "Chapter 1"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 2"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 2");
          }}
          selected={selected === "Chapter 2"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 3"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 3");
          }}
          selected={selected === "Chapter 3"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 4"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 4");
          }}
          selected={selected === "Chapter 4"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 5"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 5");
          }}
          selected={selected === "Chapter 5"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 6"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 6");
          }}
          selected={selected === "Chapter 6"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={bookmark}
          title="Chapter 7"
          onClick={() => {
            setHide(true);
            setSelected("Chapter 7");
          }}
          selected={selected === "Chapter 7"}
        />
      </NavigationDrawer>
      <AppBarTop>
        {!showSearch && (
          <>
            <InnerWrapper>
              <ActionItem
                id="hamburger-menu"
                svg={menu}
                onClick={() => {
                  setHide(false);
                }}
              />
              <Title>Pillow</Title>
            </InnerWrapper>
            <InnerWrapper>
              <ActionItem
                svg={search}
                onClick={() => {
                  setShowSearch(true);
                  setTimeout(
                    () => document.getElementById("Search").focus(),
                    200
                  );
                }}
              />
              {/* <ActionItem
                svg={showOverflow ? reply : moreHorizontal}
                onClick={() => setShowOverflow(!showOverflow)}
              /> */}
            </InnerWrapper>
          </>
        )}
        {showSearch && (
          <Search
            value={value}
            previousSearchValue="farm-to-table"
            onChange={e => setValue(e.target.value)}
            onBack={() => {
              setShowSearch(false);
              setValue("");
              setSearchValue("");
            }}
            onClose={() => setShowSearch(false)}
            onSubmit={value => setSearchValue(value)}
          />
        )}
      </AppBarTop>
      <OverflowMenu
        isOpen={showOverflow}
        position={{
          position: "fixed",
          right: "1.2rem",
          bottom: "1.2rem"
        }}
        onClick={() => setShowOverflow(!showOverflow)}
        direction="column-reverse"
      >
        <FabButton
          id="Fab 1"
          onClick={() => setShowOverflow(false)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accessibility}
            size={24}
          />
        </FabButton>
        <FabButton
          id="Fab 2"
          onClick={() => setShowOverflow(false)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...accountBox}
            size={24}
          />
        </FabButton>
        <FabButton
          id="Fab 3"
          onClick={() => setShowOverflow(false)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...alarm} size={24} />
        </FabButton>
        <FabButton
          id="Fab 4"
          onClick={() => setShowOverflow(false)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG color={MAIN_THEME.WHITE.color.foreground} {...room} size={24} />
        </FabButton>
        <FabButton
          id="Fab 5"
          onClick={() => setShowOverflow(false)}
          color={MAIN_THEME.WHITE.color.foreground}
          backgroundColor={MAIN_THEME.WHITE.color.background}
          backgroundColorHover={MAIN_THEME.WHITE.color.background}
        >
          <SVG
            color={MAIN_THEME.WHITE.color.foreground}
            {...favorite}
            size={24}
          />
        </FabButton>
      </OverflowMenu>
      <SearchSections
        sections={MOCK_SECTIONS}
        searchValue={searchValue}
        selectedSection={selected}
        foregroundColor={MAIN_THEME.PRIMARY_LIGHT.color.background}
      />
    </Wrapper>
  );
});
