import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Chart from "./Chart";
import {
  MOCK_BAR_CHART,
  MOCK_CONTINENT_POPULATION,
  MOCK_WORLD_DATA
} from "../../constants/mocks";
import { MAIN_THEME } from "../../constants/theme";
import Text from "../text/Text";
import Chips from "../chips/Chips";

const Wrapper = styled.div`
  height: 10vh;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 2rem;
`;
const Span = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;

storiesOf("Chart", module)
  .add("default - icon", () => (
    <Chart values={MOCK_BAR_CHART} type="default-icon" width="40vw" />
  ))
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
            <Text color="#ffffff">Selected: {selected.x}</Text>
          </h1>
        )}
        <Chart
          values={MOCK_BAR_CHART}
          color={MAIN_THEME.SECONDARY_DARK.color.background}
          hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
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
            <Text color="#ffffff">Selected: {selected.x}</Text>
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
    return (
      <>
        {selectedCountry.x && (
          <h2>
            <Text foregroundColor={MAIN_THEME.SECONDARY_DARK.color.background}>
              <Span>{selectedCountry.x}:</Span> {selectedCountry.y} million
              people
            </Text>
          </h2>
        )}
        <Chips
          chips={Object.keys(MOCK_CONTINENT_POPULATION).map(key => ({
            title: key
          }))}
          onChange={chips => setSelectedContinent(chips[0] || "africa")}
        />
        <FlexWrapper>
          {selectedContinent && (
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
              type="horizontal-bar"
            />
          )}
          <Chart
            title="(%) World population"
            color={MAIN_THEME.BLACK.color.background}
            alternateColor={MAIN_THEME.SECONDARY_DARK.color.background}
            hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
            width="20vw"
            fillPercentage={MOCK_CONTINENT_POPULATION[selectedContinent]}
            type="donut"
          />
        </FlexWrapper>
      </>
    );
  });
