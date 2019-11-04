import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Chart from "./Chart";
import { MOCK_BAR_CHART, MOCK_PIE_CHART } from "../../constants/mocks";
import { MAIN_THEME } from "../../constants/theme";
import Text from "../text/Text";
import Chips from "../chips/Chips";

const Wrapper = styled.div`
  padding: 1rem;
  height: 15rem;
`;

storiesOf("Chart", module)
  .add("bar chart - horizontal", () => (
    <Chart values={MOCK_BAR_CHART} type="bar" horizontal />
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
          type="bar"
        />
      </>
    );
  })
  .add("pie chart", () => {
    const [selected, setSelected] = useState(undefined);
    return (
      <>
        <Chips
          chips={Object.keys(MOCK_PIE_CHART).map(key => ({ title: key }))}
          onChange={chips => setSelected(chips[0])}
        />
        <Wrapper>
          <Chart
            title="Percentage of the world population"
            values={MOCK_PIE_CHART}
            color={MAIN_THEME.SECONDARY_DARK.color.background}
            hoverColor={MAIN_THEME.SECONDARY_LIGHT.color.background}
            onClick={() => {}}
            size={100}
            fillPercentage={MOCK_PIE_CHART[selected]}
            type="pie"
          />
        </Wrapper>
      </>
    );
  });
