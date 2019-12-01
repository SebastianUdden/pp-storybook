import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MAIN_THEME, DP_TYPES } from "../../constants/theme";
import { isEquivalent } from "../../utils/object";

const Wrapper = styled.ul`
  cursor: pointer;
  margin: 0.5rem 0;
  padding: 1rem;
  list-style: none;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.foregroundColor};
  box-shadow: ${p => p.boxShadow};
  :active {
    cursor: pointer;
    box-shadow: ${p => p.boxShadowRaised};
  }
  ${p =>
    p.selected &&
    css`
      box-shadow: ${DP_TYPES.DPraised};
      background-color: ${p => p.alternateBackgroundColor};
    `};
`;

const Row = styled.li`
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${p => p.foregroundColor};
  :last-child {
    border-bottom: none;
  }
`;
const DataTitle = styled.label`
  font-weight: 800;
  color: ${p => p.color};
  width: 50%;
`;
const DataValue = styled.span`
  width: 50%;
`;

const DataCards = ({
  filters,
  headings,
  data,
  backgroundColor = MAIN_THEME.WHITE.color.background,
  alternateBackgroundColor = MAIN_THEME.SECONDARY_LIGHT.color.background,
  foregroundColor = MAIN_THEME.WHITE.color.foreground,
  labelColor = "#999999",
  headerBackgroundColor = MAIN_THEME.PRIMARY_DARK.color.background,
  boxShadow = DP_TYPES.DP6,
  boxShadowRaised = DP_TYPES.DPraised,
  onClick
}) => {
  const [selectedRow, setSelectedRow] = useState({});
  return (
    <>
      {data &&
        data.rows &&
        headings &&
        data.rows.map(row => (
          <Wrapper
            backgroundColor={backgroundColor}
            alternateBackgroundColor={alternateBackgroundColor}
            foregroundColor={foregroundColor}
            boxShadow={boxShadow}
            boxShadowRaised={boxShadowRaised}
            onClick={() => {
              setSelectedRow(row);
              onClick(row);
            }}
            selected={isEquivalent(row, selectedRow)}
            borderColor={headerBackgroundColor}
          >
            {row.cells.map((cell, index) =>
              filters && filters.length ? (
                filters.find(filter => filter === headings[index].title) && (
                  <Row foregroundColor={foregroundColor}>
                    <DataTitle color={labelColor}>
                      {headings[index].title}
                    </DataTitle>
                    <DataValue>{cell}</DataValue>
                  </Row>
                )
              ) : (
                <Row foregroundColor={foregroundColor}>
                  <DataTitle color={labelColor}>
                    {headings[index].title}
                  </DataTitle>
                  <DataValue>{cell}</DataValue>
                </Row>
              )
            )}
          </Wrapper>
        ))}
    </>
  );
};

export default DataCards;
