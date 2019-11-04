import React, { useState } from "react"; // Import full React framework
import styled from "styled-components"; // Import styled components (to be able to write CSS in Javascript)
import { storiesOf } from "@storybook/react"; // Import 1 function under Storybook framework

import AppBarTop from "../appBarTop/AppBarTop";
import { DEFAULT_FONT } from "../../constants/font";
import { menu } from "../../svgs/navigation/menu";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import { favorite } from "../../svgs/actions/favorite";
import { search } from "../../svgs/actions/search";
import ActionItem from "../actionItem/ActionItem";
import { MEDIA_MAX_MEDIUM } from "../../constants/sizes";
import { MAIN_THEME, DP6 } from "../../constants/theme";
import NavigationDrawer from "../navigationDrawer/NavigationDrawer";
import NavigationLink from "../navigationLink/NavigationLink";
import SVG from "../svg/SVG";
import { supervisedUserCircle } from "../../svgs/actions/supervised-user-circle";
import { monetizationOn } from "../../svgs/editor/monetization-on";
import { RATINGS_DB } from "../../constants/pp_Ratings_data";
import Table from "../table/Table";
import Text from "../text/Text";
import Stars from "../stars/Stars";

// Documentation:

// storiesOf("Name of top category to be shown in app", module)
//    .add("Name of subcategory to be shown in app", () => {})    where () applies input variables available for ".add" command, google framwork documentation for list of available variables.. {} defines the return object, in example below, an icon

// If error "Button is not defined", click at end of Button and press ctrl+space to auto import

const Container = styled.div`
  background-color: white;
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

const Section = styled.div`
  background-color: ${MAIN_THEME.WHITE.color.background};
  color: ${MAIN_THEME.WHITE.color.foreground};
  box-shadow: ${DP6};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInfo = styled(Section)`
  flex-direction: column;
  padding: 1rem;
`;

const TextCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const H2 = styled.h2`
  color: ${p => p.color};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin: 0.2rem 0.2rem 0;
  padding: 0;
`;

storiesOf("_PP Ratings", module).add("Home", () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("First North");
  const [hide, setHide] = useState(true);

  return (
    <Container>
      <NavigationDrawer
        boxShadow={DP6}
        color={MAIN_THEME.WHITE.color.foreground}
        backgroundColor={MAIN_THEME.WHITE.color.background}
        onHide={() => setHide(true)}
        hide={hide}
        buttonElementId="hamburger-menu"
      >
        <H2 color={MAIN_THEME.BLACK.color.background}>
          <FlexWrapper>
            <SVG
              {...monetizationOn}
              size={34}
              color={MAIN_THEME.BLACK.color.background}
            />
            <P>Pillow</P>
          </FlexWrapper>
        </H2>
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisedUserCircle}
          title="Large cap"
          onClick={() => {
            setHide(true);
            setSelected("Large cap");
          }}
          selected={selected === "Large cap"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisedUserCircle}
          title="Mid cap"
          onClick={() => {
            setHide(true);
            setSelected("Mid cap");
          }}
          selected={selected === "Mid cap"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisedUserCircle}
          title="Small cap"
          onClick={() => {
            setHide(true);
            setSelected("Small cap");
          }}
          selected={selected === "Small cap"}
        />
        <NavigationLink
          backgroundColor={MAIN_THEME.PRIMARY.color.background}
          colorHover={MAIN_THEME.PRIMARY.color.background}
          color={MAIN_THEME.WHITE.color.foreground}
          svg={supervisedUserCircle}
          title="First North"
          onClick={() => {
            setHide(true);
            setSelected("First North");
          }}
          selected={selected === "First North"}
        />
      </NavigationDrawer>
      <AppBarTop>
        <InnerWrapper>
          <ActionItem
            id="hamburger-menu"
            svg={menu}
            onClick={() => {
              setHide(false);
            }}
          />
          <Title>Ratings</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>

      <SectionInfo>
        <Table
          headingBackgroundColor="#587899"
          headingForegroundColor="#FFFFFF"
          headings={RATINGS_DB.tables.firstnorth.headings}
          data={RATINGS_DB.tables.firstnorth.data}
        />
      </SectionInfo>
    </Container>
  );
});
