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
import { MAIN_THEME } from "../../constants/theme";
import { Text } from "../text/Text";
import Search from "../search/Search";
import OverflowMenu from "../overflowMenu/OverflowMenu";
import FabButton from "../button/FabButton";
import SVG from "../svg/SVG";
import { accessibility } from "../../svgs/actions/accessibility";
import { accountBox } from "../../svgs/actions/account-box";
import { alarm } from "../../svgs/actions/alarm";
import { room } from "../../svgs/actions/room";

// Documentation:

// storiesOf("Name of top category to be shown in app", module)
//    .add("Name of subcategory to be shown in app", () => {})    where () applies input variables available for ".add" command, google framwork documentation for list of available variables.. {} defines the return object, in example below, an icon

// If error "Button is not defined", click at end of Button and press ctrl+space to auto import

// Example:

const Container = styled.div`
  background-color: white;
`;

const H1 = styled.h1`
  color: #000;
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
  background-color: ${MAIN_THEME.SECONDARY.color.background};
  color: ${MAIN_THEME.SECONDARY.color.foreground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInfo = styled(Section)`
  flex-direction: column;
`;

const Table = styled.table`
  background-color: ${MAIN_THEME.WHITE.color.background};
  color: ${MAIN_THEME.WHITE.color.foreground};
`;

const Th = styled.th`
  padding: 0 1.5rem 0 1.5rem;
`;

const Td = styled.td`
  padding: 0 1.5rem 0 1.5rem;
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

storiesOf("_PP Insider", module).add("Home", () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <AppBarTop>
        <InnerWrapper>
          <ActionItem svg={menu} />
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
          <Table>
            <tr>
              <Th>
                <Text>Företag</Text>
              </Th>
              <Th>
                <Text>Antal transaktioner</Text>
              </Th>
              <Th>
                <Text>Netto köp/sälj</Text>
              </Th>
            </tr>
            <tr>
              <Td>
                <Text>
                  <a href="Hej">P.I.L.L.O.W</a>
                </Text>
              </Td>
              <Td>
                <Text>Sebastian Uddén</Text>
              </Td>
              <Td>
                <Text>10 000 000</Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>
                  <a href="Hej">P.I.L.L.O.W</a>
                </Text>
              </Td>
              <Td>
                <Text>Sebastian Uddén</Text>
              </Td>
              <Td>
                <Text>10 000 000</Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>
                  <a href="Hej">P.I.L.L.O.W</a>
                </Text>
              </Td>
              <Td>
                <Text>Sebastian Uddén</Text>
              </Td>
              <Td>
                <Text>10 000 000</Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>
                  <a href="Hej">P.I.L.L.O.W</a>
                </Text>
              </Td>
              <Td>
                <Text>Sebastian Uddén</Text>
              </Td>
              <Td>
                <Text>10 000 000</Text>
              </Td>
            </tr>
            <tr>
              <Td>
                <Text>
                  <a href="Hej">P.I.L.L.O.W</a>
                </Text>
              </Td>
              <Td>
                <Text>Sebastian Uddén</Text>
              </Td>
              <Td>
                <Text>10 000 000</Text>
              </Td>
            </tr>
          </Table>
        </SectionInfo>
      ) : (
        <Section>
          {/* <Text>Tabell som visar top 10 personer som netto köpts/sålts</Text> */}
          <Table>
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
          </Table>
        </Section>
      )}
    </Container>
  );
});
