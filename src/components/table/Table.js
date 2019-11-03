import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DP_TYPES, MAIN_THEME } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";
import { getLinkValues } from "../../utils/markdownParsers";
import { getNumberWithSpaces, roundTwoDec } from "../../utils/numberParsers";
import { expandMore } from "../../svgs/navigation/expand-more";
import { expandLess } from "../../svgs/navigation/expand-less";
import { lock } from "../../svgs/actions/lock";
import ActionItem from "../actionItem/ActionItem";
import { lockOpen } from "../../svgs/actions/lock-open";

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;
const Wrapper = styled.table`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  width: 100%;
  box-shadow: ${DP_TYPES.DP6};
  background-color: ${p => p.backgroundColor};
  border-collapse: collapse;
`;
const Title = styled.div`
  width: 100%;
`;
const ActionItemWrapper = styled.div`
  visibility: ${p => (p.invisible ? "hidden" : "visible")};
  width: 3rem;
`;
const THead = styled.thead`
  border-bottom: 2px solid ${p => p.alternateColor};
  color: ${p => p.headingForegroundColor};
  padding: 2rem;
  tr th {
    background-color: ${p => p.headingBackgroundColor};
  }
  tr th:not(:last-child) {
    border-right: 1px solid ${p => p.headingForegroundColor}66;
  }
  tr th:nth-child(2) {
    padding-left: ${p => (p.lockedColumn ? "25rem" : "1rem")};
  }
`;
const TBody = styled.tbody`
  tr:nth-child(odd) td {
    background-color: ${p => p.alternateColor};
  }
  tr:nth-child(even) td {
    background-color: ${p => p.backgroundColor};
  }
  tr:hover {
    cursor: pointer;
    box-shadow: ${DP_TYPES.DP6};

    td {
      color: ${p => p.headingForegroundColor};
      background-color: ${p => p.headingBackgroundColor};
    }
  }
  ${p =>
    p.lockedColumn &&
    css`
      tr td:first-child {
        position: absolute;
        width: 20rem;
        left: auto;
        top: auto;
        border-top-width: 1px;
        /*only relevant for first row*/
        margin-top: -1px;
        /*compensate for top border*/
        box-shadow: ${DP_TYPES.DP6};
      }
      tr td:nth-child(2) {
        padding-left: 25rem;
      }
    `};
`;
const TH = styled.th`
  text-align: left;
  padding: 0.5rem 1rem;
  background-color: ${p => p.backgroundColor};
  user-select: none;
  :hover {
    cursor: pointer;
    box-shadow: ${DP_TYPES.DP6};
    background-color: ${p => p.backgroundColor};
  }

  ${p =>
    p.lockedColumn &&
    css`
      z-index: 5;
      position: absolute;
      width: 20rem;
      left: auto;
      top: auto;
      border-top-width: 1px;
      margin-top: -1px;
      box-shadow: ${DP_TYPES.DP6};
    `}
`;
const Heading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.foregroundColor};
  max-width: 100%;
`;
const TR = styled.tr``;
const TD = styled.td`
  padding: 0.5rem 1rem;
  text-align: ${p => (p.alignRight ? "right" : "left")};
  white-space: nowrap;
`;

const Link = styled.a`
  font-family: ${DEFAULT_FONT.family};
  color: ${p => p.foregroundColor};
  text-decoration: none;
  font-weight: 800;
`;

const formatCell = cell => {
  let displayCell;
  const isNumber = typeof cell === "number";
  const isString = typeof cell === "string";
  if (isString) {
    const linkValues = getLinkValues(cell);
    displayCell = linkValues.length ? (
      <Link
        foregroundColor={MAIN_THEME.BLACK.color.background}
        href={linkValues[1]}
        alt={linkValues[0]}
        target="_blank"
      >
        {linkValues[0]}
      </Link>
    ) : (
      cell
    );
  } else if (isNumber) {
    displayCell = getNumberWithSpaces(roundTwoDec(cell));
  } else {
    displayCell = cell;
  }
  // const offsetWidth =
  //   index === 0 &&
  //   document.getElementById(headings[0].id) &&
  //   document.getElementById(headings[0].id).offsetWidth;
  return <TD alignRight={isNumber}>{displayCell}</TD>;
};

const sortData = (data, sortingMethod) => {
  const isString = typeof data.rows[0].cells[sortingMethod.column] === "string";
  data.rows.sort((first, second) => {
    const a = sortingMethod.ascending ? first : second;
    const b = sortingMethod.ascending ? second : first;

    return isString
      ? a.cells[sortingMethod.column].localeCompare(
          b.cells[sortingMethod.column]
        )
      : a.cells[sortingMethod.column] - b.cells[sortingMethod.column];
  });
  return data;
};

const Table = ({
  headings: inputHeadings,
  data: inputData,
  headingForegroundColor = "#000000",
  headingBackgroundColor = "#DDDDDD",
  backgroundColor = "#FFFFFF",
  alternateColor = "#EEEEEE"
}) => {
  const [sortingMethod, setSortingMethod] = useState({
    column: 0,
    ascending: true
  });
  const [lockedColumn, setLockedColumn] = useState(undefined);
  const [headings, setHeadings] = useState(inputHeadings);
  const [data, setData] = useState(inputData);

  useEffect(() => {
    const modifyHeadings = [...headings];
    const splicedHeadings = modifyHeadings.splice(lockedColumn, 1);
    modifyHeadings.unshift(splicedHeadings[0]);

    setHeadings(modifyHeadings);
    setData({
      ...data,
      rows: data.rows.map(row => {
        const modifyCells = row.cells.slice();
        const splicedCells = modifyCells.splice(lockedColumn, 1);
        modifyCells.unshift(splicedCells[0]);
        return {
          cells: modifyCells
        };
      })
    });
  }, [lockedColumn]);

  sortData(data, sortingMethod);

  return (
    <Container>
      <Wrapper backgroundColor={backgroundColor}>
        <THead
          headingForegroundColor={headingForegroundColor}
          headingBackgroundColor={headingBackgroundColor}
          alternateColor={alternateColor}
          lockedColumn={lockedColumn !== undefined}
        >
          <TR>
            {headings.map((heading, index) => (
              <TH
                id={heading.id}
                backgroundColor={headingBackgroundColor + "EE"}
                selected={sortingMethod.column === index}
                alignRight={heading.alignRight}
                onClick={() => {
                  setSortingMethod({
                    column: index,
                    ascending: !sortingMethod.ascending
                  });
                }}
                lockedColumn={index === 0 && lockedColumn !== undefined}
              >
                <Heading foregroundColor={headingForegroundColor}>
                  <Title>{heading.title}</Title>
                  {sortingMethod.column === index ? (
                    <ActionItemWrapper>
                      <ActionItem
                        svg={
                          index === 0 && lockedColumn !== undefined
                            ? lock
                            : lockOpen
                        }
                        onClick={() =>
                          index === 0 && lockedColumn !== undefined
                            ? setLockedColumn(undefined)
                            : setLockedColumn(index)
                        }
                        color={headingForegroundColor}
                        padding="0.5rem"
                      />
                    </ActionItemWrapper>
                  ) : (
                    <ActionItemWrapper invisible>
                      <ActionItem
                        svg={lock}
                        color={headingForegroundColor}
                        padding="0.5rem"
                      />
                    </ActionItemWrapper>
                  )}
                  {sortingMethod.ascending ? (
                    <ActionItemWrapper>
                      <ActionItem
                        svg={expandMore}
                        color={`${headingForegroundColor}${
                          sortingMethod.column !== index ? "00" : "FF"
                        }`}
                        padding="0.5rem"
                      />
                    </ActionItemWrapper>
                  ) : (
                    <ActionItemWrapper>
                      <ActionItem
                        svg={expandLess}
                        color={`${headingForegroundColor}${
                          sortingMethod.column !== index ? "00" : "FF"
                        }`}
                        padding="0.5rem"
                      />
                    </ActionItemWrapper>
                  )}
                </Heading>
              </TH>
            ))}
          </TR>
        </THead>
        <TBody
          alternateColor={alternateColor}
          backgroundColor={backgroundColor}
          headingForegroundColor={headingForegroundColor}
          headingBackgroundColor={headingBackgroundColor}
          lockedColumn={lockedColumn !== undefined}
        >
          {data.rows.map(row => (
            <TR>{row.cells.map(cell => formatCell(cell))}</TR>
          ))}
        </TBody>
      </Wrapper>
    </Container>
  );
};

export default Table;
