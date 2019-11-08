import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import AppBarTop from "./AppBarTop";
import { menu } from "../../svgs/navigation/menu";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import { favorite } from "../../svgs/actions/favorite";
import { search } from "../../svgs/actions/search";
import ActionItem from "../actionItem/ActionItem";
import Search from "../search/Search";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";
import SearchSections from "../searchSections/SearchSections";
import { MOCK_SECTIONS } from "../../constants/mocks";
import { MAIN_THEME } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";

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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

storiesOf("App bar top", module)
  .add("appbar <> search", () => {
    const [value, setValue] = useState("farm-to-table");
    const [showSearch, setShowSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    return (
      <div>
        <AppBarTop>
          {!showSearch && (
            <>
              <InnerWrapper>
                <ActionItem svg={menu} />
                <Title>Regular Appbar</Title>
              </InnerWrapper>
              <InnerWrapper>
                <ActionItem
                  svg={search}
                  onClick={() => {
                    setShowSearch(true);
                    setTimeout(
                      () =>
                        document && document.getElementById("Search").focus(),
                      200
                    );
                  }}
                />
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
        <SearchSections
          sections={MOCK_SECTIONS}
          searchValue={searchValue}
          foregroundColor={MAIN_THEME.PRIMARY_LIGHT.color.background}
        />
      </div>
    );
  })
  .add("regular", () => (
    <div>
      <AppBarTop>
        <InnerWrapper>
          <ActionItem svg={menu} />
          <Title>Regular Appbar</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>
      <SearchSections sections={MOCK_SECTIONS} />
    </div>
  ))
  .add("prominent", () => (
    <div>
      <AppBarTop type="prominent">
        <InnerWrapper>
          <ActionItem svg={menu} />
          <Title large>Prominent Appbar</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>
      <SearchSections sections={MOCK_SECTIONS} />
    </div>
  ))
  .add("with dynamic action items", () => (
    <div>
      <AppBarTop type="prominent">
        <InnerWrapper>
          <ActionItem svg={menu} />
          <Title large>Prominent Appbar</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>
      <SearchSections sections={MOCK_SECTIONS} />
    </div>
  ))
  .add("search", () => {
    const [value, setValue] = useState("farm-to-table");
    return (
      <div>
        <AppBarTop>
          <Search
            value={value}
            previousSearchValue="farm-to-table"
            onChange={e => setValue(e.target.value)}
            onBack={() => setValue("")}
            onClose={() => setValue("")}
          />
        </AppBarTop>
        <SearchSections sections={MOCK_SECTIONS} />
      </div>
    );
  })
  .add("appbar and search", () => {
    const [value, setValue] = useState("farm-to-table");
    const [searchValue, setSearchValue] = useState("");

    return (
      <div>
        <AppBarTop flex={false}>
          <TopBar>
            <InnerWrapper>
              <ActionItem svg={menu} />
              <Title>Page title</Title>
            </InnerWrapper>
            <InnerWrapper>
              <ActionItem svg={favorite} />
              <ActionItem svg={moreVertical} />
            </InnerWrapper>
          </TopBar>
          <Search
            value={value}
            onChange={e => setValue(e.target.value)}
            onBack={() => setValue("")}
            onClose={() => setValue("")}
            onSubmit={value => setSearchValue(value)}
          />
        </AppBarTop>
        <SearchSections
          sections={MOCK_SECTIONS}
          searchValue={searchValue}
          foregroundColor={MAIN_THEME.PRIMARY_LIGHT.color.background}
        />
      </div>
    );
  })
  .add("appbar and dissappearing search", () => {
    const [value, setValue] = useState("farm-to-table");
    const [showSearch, setShowSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    return (
      <div>
        <AppBarTop flex={false}>
          <TopBar>
            <InnerWrapper>
              <ActionItem svg={menu} />
              <Title>Page title</Title>
            </InnerWrapper>
            <InnerWrapper>
              {!showSearch && (
                <ActionItem svg={search} onClick={() => setShowSearch(true)} />
              )}
              <ActionItem svg={favorite} />
              <ActionItem svg={moreVertical} />
            </InnerWrapper>
          </TopBar>
          {showSearch && (
            <Search
              value={value}
              onChange={e => setValue(e.target.value)}
              onBack={() => setValue("")}
              onClose={() => {
                setValue("");
                setShowSearch(false);
              }}
              onSubmit={value => {
                setShowSearch(false);
                setSearchValue(value);
              }}
            />
          )}
        </AppBarTop>
        <SearchSections
          sections={MOCK_SECTIONS}
          searchValue={searchValue}
          foregroundColor={MAIN_THEME.PRIMARY_LIGHT.color.background}
        />
      </div>
    );
  });
