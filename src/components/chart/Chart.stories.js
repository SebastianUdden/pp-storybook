import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Chart from "./Chart";
import {
  MOCK_BAR_CHART,
  MOCK_CONTINENT_POPULATION,
  MOCK_WORLD_DATA,
  MOCK_POPULATION_OVER_TIME
} from "../../constants/mocks";
import { MAIN_THEME } from "../../constants/theme";
import Text from "../text/Text";
import Chips from "../chips/Chips";
import { getNumberWithSpaces } from "../../utils/numberParsers";

const Wrapper = styled.div`
  height: 10vh;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 2rem;
`;
const FlexColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
`;
const Span = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;

storiesOf("Chart", module)
  .add("bar chart - horizontal", () => (
    <Wrapper>
      <Chart values={MOCK_BAR_CHART} type="horizontal-bar" width="40vw" />
    </Wrapper>
  ))
  .add("bar chart - vertical", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        {selected && (
          <h1>
            <Text color="#ffffff">Selected: {selected.title}</Text>
          </h1>
        )}
        <Chart
          values={MOCK_BAR_CHART}
          color={MAIN_THEME.SECONDARY_DARK.color.background}
          hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
          size={{ width: 100, height: 100, offsetWidth: 10, offsetHeight: 10 }}
          onClick={value => setSelected(value)}
          type="vertical-bar"
          width="40vw"
        />
      </>
    );
  })
  .add("dot chart - vertical", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        {selected && (
          <h1>
            <Text color="#ffffff">Selected: {selected.title}</Text>
          </h1>
        )}
        <Chart
          values={MOCK_BAR_CHART}
          color={MAIN_THEME.SECONDARY_DARK.color.background}
          hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
          onClick={value => setSelected(value)}
          type="vertical-dot"
          width="40vw"
        />
      </>
    );
  })
  .add("line chart - vertical", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        {selected && (
          <h1>
            <Text color="#ffffff">Selected: {selected.title}</Text>
          </h1>
        )}
        <Chart
          values={MOCK_BAR_CHART}
          color={MAIN_THEME.SECONDARY_DARK.color.background}
          hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
          onClick={value => setSelected(value)}
          type="vertical-line"
          width="40vw"
        />
      </>
    );
  })
  .add("pie chart", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        <Chips
          chips={Object.keys(MOCK_CONTINENT_POPULATION).map(key => ({
            title: key
          }))}
          onChange={chips => setSelected(chips[0])}
        />
        <Wrapper>
          <Chart
            title="Percentage of the world population"
            color={MAIN_THEME.BLACK.color.background}
            alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
            hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
            onClick={() => {}}
            width="30vw"
            fillPercentage={MOCK_CONTINENT_POPULATION[selected]}
            type="pie"
          />
        </Wrapper>
      </>
    );
  })
  .add("donut chart", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        <Chips
          chips={Object.keys(MOCK_CONTINENT_POPULATION).map(key => ({
            title: key
          }))}
          onChange={chips => setSelected(chips[0])}
        />
        <Wrapper>
          <Chart
            title="Percentage of the world population"
            color={MAIN_THEME.BLACK.color.background}
            alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
            hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
            onClick={() => {}}
            width="30vw"
            fillPercentage={MOCK_CONTINENT_POPULATION[selected]}
            type="donut"
            donut
          />
        </Wrapper>
      </>
    );
  })
  .add("countries - bar chart and donut", () => {
    const [selectedContinent, setSelectedContinent] = useState("africa");
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedYear, setSelectedYear] = useState(undefined);

    useEffect(() => {
      setSelectedCountry({});
    }, [selectedContinent]);

    useEffect(() => {
      setSelectedYear(undefined);
    }, [selectedCountry]);

    return (
      <>
        <Chips
          chips={Object.keys(MOCK_CONTINENT_POPULATION).map(key => ({
            title: key
          }))}
          onChange={chips => setSelectedContinent(chips[0] || "africa")}
        />
        <FlexWrapper>
          {selectedContinent && MOCK_WORLD_DATA[selectedContinent] && (
            <Chart
              title={`Population: ${(MOCK_CONTINENT_POPULATION[
                selectedContinent
              ] /
                100) *
                7500} million, countries shown by relative population`}
              color={MAIN_THEME.SECONDARY_DARK.color.background}
              hoverColor={MAIN_THEME.BLACK.color.background}
              alternateColor={MAIN_THEME.BLACK.color.background}
              values={MOCK_WORLD_DATA[selectedContinent]}
              onClick={value => setSelectedCountry(value)}
              maxBarWidth={2}
              minBarWidth={2}
              dynamicChart
              type="horizontal-bar"
            />
          )}
          <FlexColumn>
            {MOCK_CONTINENT_POPULATION[selectedContinent] && (
              <Chart
                title="(%) World population"
                color={MAIN_THEME.BLACK.color.background}
                alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
                hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                width="20vw"
                fillPercentage={MOCK_CONTINENT_POPULATION[selectedContinent]}
                type="donut"
              />
            )}
            {selectedCountry.title &&
              MOCK_CONTINENT_POPULATION[selectedContinent] && (
                <Chart
                  title="(%) Continent population"
                  color={MAIN_THEME.BLACK.color.background}
                  alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
                  hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                  width="20vw"
                  fillPercentage={
                    (selectedCountry.y /
                      ((MOCK_CONTINENT_POPULATION[selectedContinent] / 100) *
                        7500)) *
                    100
                  }
                  type="pie"
                />
              )}
          </FlexColumn>
        </FlexWrapper>
        {selectedCountry.title && (
          <>
            <h3>
              <Text
                foregroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
              >
                <Span>{selectedCountry.title}:</Span> {selectedCountry.y}{" "}
                million people
              </Text>
            </h3>
            {MOCK_POPULATION_OVER_TIME[selectedCountry.title] && (
              <Chart
                title="Population over time (mppl)"
                color={MAIN_THEME.SECONDARY_DARK.color.background}
                alternateColor={MAIN_THEME.BLACK.color.background}
                hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
                values={MOCK_POPULATION_OVER_TIME[selectedCountry.title]}
                onClick={value => setSelectedYear(value)}
                dynamicChart
                showTextValues
                width="40vw"
                dotRadius="2"
                type="vertical-line"
              />
            )}
            {selectedYear && (
              <h3>
                <Text
                  foregroundColor={MAIN_THEME.SECONDARY_DARK.color.background}
                >
                  <Span>{selectedYear.title}:</Span>{" "}
                  {getNumberWithSpaces(selectedYear.y.toString())} million
                  people
                </Text>
              </h3>
            )}
          </>
        )}
      </>
    );
  });
