import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import AppBarTop from "./AppBarTop";
import { menu } from "../../svgs/navigation/menu";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import { favorite } from "../../svgs/actions/favorite";
import { search } from "../../svgs/actions/search";
import MockParagraphs from "./MockParagraph";
import ActionItem from "../actionItem/ActionItem";
import Search from "../search/Search";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: x-large;
  margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 1.5rem;
  padding: 0;
  ${MEDIA_MAX_MEDIUM} {
    margin: ${p => (p.large ? "2.5rem" : 0)} 0 0 0.2rem;
  }
`;

storiesOf("App bar top", module)
  .add("regular", () => (
    <div>
      <AppBarTop>
        <InnerWrapper>
          <ActionItem svg={menu} />
          <Title>Prominent Appbar</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>
      <MockParagraphs />
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
      <MockParagraphs />
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
      <MockParagraphs />
    </div>
  ))
  .add("search", () => {
    const [value, setValue] = useState("Ergo, the search persists...");
    return (
      <div>
        <AppBarTop>
          <Search
            value={value}
            previousSearchValue="Ergo, the search persists..."
            onChange={e => setValue(e.target.value)}
            onBack={() => setValue("")}
            onClose={() => setValue("")}
          />
        </AppBarTop>
        <MockParagraphs />
      </div>
    );
  })
  .add("appbar <> search", () => {
    const [value, setValue] = useState("Ergo, the search persists...");
    const [showSearch, setShowSearch] = useState(true);

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
                      () => document.getElementById("Search").focus(),
                      50
                    );
                  }}
                />
              </InnerWrapper>
            </>
          )}
          {showSearch && (
            <Search
              value={value}
              previousSearchValue="Ergo, the search persists..."
              onChange={e => setValue(e.target.value)}
              onBack={() => {
                setShowSearch(false);
                setValue("");
              }}
              onClose={() => setShowSearch(false)}
            />
          )}
        </AppBarTop>
        <MockParagraphs />
      </div>
    );
  });
