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
import Text from "../text/Text";
import Search from "../search/Search";
import OverflowMenu from "../overflowMenu/OverflowMenu";
import FabButton from "../button/FabButton";
import NavigationDrawer from "../navigationDrawer/NavigationDrawer";
import NavigationLink from "../navigationLink/NavigationLink";
import SVG from "../svg/SVG";
import { supervisedUserCircle } from "../../svgs/actions/supervised-user-circle";
import { monetizationOn } from "../../svgs/editor/monetization-on";
import Table from "../table/Table";
import { INSIDER } from "./pillow_mock";

// Documentation:

// storiesOf("Name of top category to be shown in app", module)
//    .add("Name of subcategory to be shown in app", () => {})    where () applies input variables available for ".add" command, google framwork documentation for list of available variables.. {} defines the return object, in example below, an icon

// If error "Button is not defined", click at end of Button and press ctrl+space to auto import

// Example:

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

const Graph = styled.div`
  height: 50vh;
  background-color: ${MAIN_THEME.WHITE.color.background};
  color: ${MAIN_THEME.WHITE.color.foreground};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Section = styled.div`
  height: 50vh;
  background-color: ${MAIN_THEME.WHITE.color.background};
  color: ${MAIN_THEME.WHITE.color.foreground};
  box-shadow: ${DP6};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInfo = styled(Section)`
  flex-direction: column;
  padding: 5rem;
`;

const Fab = styled(FabButton)`
  margin: 1rem 0;
  padding: 2rem;
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

storiesOf("_PP Insider", module).add("Home", () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Insider");
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
          title="Insider"
          onClick={() => {
            setHide(true);
            setSelected("Insider");
          }}
          selected={selected === "Insider"}
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
          <Title>Insider</Title>
        </InnerWrapper>
        <InnerWrapper>
          <ActionItem svg={favorite} />
          <ActionItem svg={search} />
          <ActionItem svg={moreVertical} />
        </InnerWrapper>
      </AppBarTop>
      <Search
        value={value}
        previousSearchValue=""
        onChange={e => setValue(e.target.value)}
        onClose={() => setValue("")}
      />

      <Graph>
        <OverflowMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Fab
            id="Fab 1"
            onClick={e => onClick(e.target.id)}
            color={MAIN_THEME.WHITE.color.foreground}
            backgroundColor={MAIN_THEME.WHITE.color.background}
            backgroundColorHover={MAIN_THEME.WHITE.color.background}
          >
            <Text>7D</Text>
          </Fab>
          <Fab
            id="Fab 2"
            onClick={e => onClick(e.target.id)}
            color={MAIN_THEME.WHITE.color.foreground}
            backgroundColor={MAIN_THEME.WHITE.color.background}
            backgroundColorHover={MAIN_THEME.WHITE.color.background}
          >
            <Text>30D</Text>
          </Fab>
          <Fab
            id="Fab 3"
            onClick={e => onClick(e.target.id)}
            color={MAIN_THEME.WHITE.color.foreground}
            backgroundColor={MAIN_THEME.WHITE.color.background}
            backgroundColorHover={MAIN_THEME.WHITE.color.background}
          >
            <Text>12M</Text>
          </Fab>
        </OverflowMenu>
        <TextCenter>
          <Text>
            BAR GRAPH {value === "" ? "for market" : value} (showing for
            timespan selected in Overflow menu)
          </Text>
        </TextCenter>
      </Graph>

      {value === "" ? (
        <SectionInfo>
          <Text>
            Tabell ska visa top 10 företag som netto köpts/sålts under den valda
            tidsperioden (väljs i Overflow menu). Max 1 unikt förestagsnamn.
            Netto köpt/sälj ska vara summa av allt under vald tidsperiod.
          </Text>
          <Table
            headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
            headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
            headings={INSIDER.tables.market.headings}
            data={INSIDER.tables.market.data}
          />
        </SectionInfo>
      ) : (
        <SectionInfo>
          <Text>Tabell som visar top 10 personer som netto köpts/sålts</Text>
          <Table
            headingBackgroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
            headingForegroundColor={MAIN_THEME.SECONDARY_DARK.color.foreground}
            headings={INSIDER.tables.company.headings}
            data={INSIDER.tables.company.data}
          />
          {/* <Table>
            <tr>
              <Th>
                <Text>Publiceringsdatum</Text>
              </Th>
              <Th>
                <Text>Person i ledande ställning</Text>
              </Th>
              <Th>
                <Text>Befattning</Text>
              </Th>
              <Th>
                <Text>Typ</Text>
              </Th>
              <Th>
                <Text>Instrumentnamn</Text>
              </Th>
              <Th>
                <Text>Volym</Text>
              </Th>
              <Th>
                <Text>Pris</Text>
              </Th>
              <Th>
                <Text>MV</Text>
              </Th>
              <Th>
                <Text>URL till "Detaljer"</Text>
              </Th>
            </tr>
            <tr>
              <Td>
                <Text>2019-09-31</Text>
              </Td>
              <Td>
                <Text>Mattias Labraaten</Text>
              </Td>
              <Td>
                <Text>CIO</Text>
              </Td>
              <Td>
                <Text>Köp</Text>
              </Td>
              <Td>
                <Text>Aktier</Text>
              </Td>
              <Td>
                <Text>10 000</Text>
              </Td>
              <Td>
                <Text>200</Text>
              </Td>
              <Td>
                <Text>2 000 000</Text>
              </Td>
              <Td>
                <Text>
                  <a href="Hej">Länk</a>
                </Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>2019-09-31</Text>
              </Td>
              <Td>
                <Text>Mattias Labraaten</Text>
              </Td>
              <Td>
                <Text>CIO</Text>
              </Td>
              <Td>
                <Text>Köp</Text>
              </Td>
              <Td>
                <Text>Aktier</Text>
              </Td>
              <Td>
                <Text>10 000</Text>
              </Td>
              <Td>
                <Text>200</Text>
              </Td>
              <Td>
                <Text>2 000 000</Text>
              </Td>
              <Td>
                <Text>
                  <a href="Hej">Länk</a>
                </Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>2019-09-31</Text>
              </Td>
              <Td>
                <Text>Mattias Labraaten</Text>
              </Td>
              <Td>
                <Text>CIO</Text>
              </Td>
              <Td>
                <Text>Köp</Text>
              </Td>
              <Td>
                <Text>Aktier</Text>
              </Td>
              <Td>
                <Text>10 000</Text>
              </Td>
              <Td>
                <Text>200</Text>
              </Td>
              <Td>
                <Text>2 000 000</Text>
              </Td>
              <Td>
                <Text>
                  <a href="Hej">Länk</a>
                </Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>2019-09-31</Text>
              </Td>
              <Td>
                <Text>Mattias Labraaten</Text>
              </Td>
              <Td>
                <Text>CIO</Text>
              </Td>
              <Td>
                <Text>Köp</Text>
              </Td>
              <Td>
                <Text>Aktier</Text>
              </Td>
              <Td>
                <Text>10 000</Text>
              </Td>
              <Td>
                <Text>200</Text>
              </Td>
              <Td>
                <Text>2 000 000</Text>
              </Td>
              <Td>
                <Text>
                  <a href="Hej">Länk</a>
                </Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>2019-09-31</Text>
              </Td>
              <Td>
                <Text>Mattias Labraaten</Text>
              </Td>
              <Td>
                <Text>CIO</Text>
              </Td>
              <Td>
                <Text>Köp</Text>
              </Td>
              <Td>
                <Text>Aktier</Text>
              </Td>
              <Td>
                <Text>10 000</Text>
              </Td>
              <Td>
                <Text>200</Text>
              </Td>
              <Td>
                <Text>2 000 000</Text>
              </Td>
              <Td>
                <Text>
                  <a href="Hej">Länk</a>
                </Text>
              </Td>
            </tr>
          </Table> */}
        </SectionInfo>
      )}
    </Container>
  );
});
