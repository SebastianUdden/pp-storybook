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
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes";
import Search from "../search/Search";
import { isEquivalent } from "../../utils/object";
import SVG from "../svg/SVG";

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
  padding: 0;
  margin: 0;
`;
const Icons = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: ${p => (p.enableLock ? "column" : "row")};
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${p => p.foregroundColor};
  max-width: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
  ${p =>
    p.resize &&
    css`
      resize: horizontal;
      padding: 0.5rem;
    `};
`;
const ActionItemWrapper = styled.div`
  visibility: ${p => (p.invisible ? "hidden" : "visible")};
  margin-bottom: -0.4rem;
  margin-left: 0.5rem;
`;
const THead = styled.thead`
  border-bottom: 2px solid ${p => p.alternateColor};
  color: ${p => p.headingForegroundColor};
  padding: 1rem;
  tr th {
    background-color: ${p => p.headingBackgroundColor};
  }
  tr th:not(:last-child) {
    border-right: 1px solid ${p => p.headingForegroundColor}66;
  }
  tr th:nth-child(2) {
    padding-left: ${p => (p.lockedColumn ? "13rem" : "1rem")};

    ${MEDIA_MIN_MEDIUM} {
      padding-left: ${p => (p.lockedColumn ? "23rem" : "1rem")};
    }
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
      text-size-adjust: none;
    }
  }
  ${p =>
    p.lockedColumn &&
    css`
      tr td:first-child {
        position: absolute;
        left: auto;
        top: auto;
        border-top-width: 1px;
        /*only relevant for first row*/
        margin-top: -1px;
        /*compensate for top border*/
        box-shadow: ${DP_TYPES.DP6};
        width: 10rem;

        ${MEDIA_MIN_MEDIUM} {
          width: 20rem;
        }
      }
      tr td:nth-child(2) {
        padding-left: 13rem;

        ${MEDIA_MIN_MEDIUM} {
          padding-left: 23rem;
        }
        text-size-adjust: none;
      }
    `};
`;
const TH = styled.th`
  text-align: left;
  padding: 0.5rem;
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
      left: auto;
      top: auto;
      border-top-width: 1px;
      margin-top: -1px;
      box-shadow: ${DP_TYPES.DP6};
      width: 10rem;
      max-width: 40vw;

      ${MEDIA_MIN_MEDIUM} {
        width: 20rem;
      }
    `}
  font-size: medium;
`;
const TR = styled.tr`
  ${p =>
    p.selected &&
    css`
      td {
        border-top: 2px solid ${p.headingBackgroundColor};
        border-bottom: 2px solid ${p.headingBackgroundColor};
        box-sizing: border-box;
      }
      td:first-child {
        border-left: 1rem solid ${p.headingBackgroundColor};
      }
      td:last-child {
        border-right: 1rem solid ${p.headingBackgroundColor};
      }
      :hover {
        td {
          border-top: 2px solid ${p.headingForegroundColor};
          border-bottom: 2px solid ${p.headingForegroundColor};
        }
        td:first-child {
          border-left: 1rem solid ${p.headingForegroundColor};
        }
        td:last-child {
          border-right: 1rem solid ${p.headingForegroundColor};
        }
      }
    `};
`;
const TD = styled.td`
  padding: 0.5rem;
  text-align: ${p => (p.alignRight ? "right" : "left")};
  white-space: nowrap;
  font-size: medium;
`;

const Link = styled.a`
  font-family: ${DEFAULT_FONT.family};
  color: ${p => p.foregroundColor};
  text-decoration: none;
  font-weight: 800;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LeftBox = styled.div`
  margin: 0;
  padding: 1rem 0;
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
  // if (typeof window === "undefined") return;
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
  alternateColor = "#EEEEEE",
  enableResize,
  enableSearch,
  enableLock,
  onClick = () => {}
}) => {
  const [selectedRow, setSelectedRow] = useState({});
  const [sortingMethod, setSortingMethod] = useState({
    column: 0,
    ascending: true
  });
  const [lockedColumn, setLockedColumn] = useState(undefined);
  const [value, setValue] = useState("");
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

  const onSubmit = value => {
    const rows = inputData.rows.filter(row =>
      row.cells.some(cell => {
        return cell
          .toString()
          .toLowerCase()
          .includes(value);
      })
    );
    setData({
      ...data,
      rows: rows.length ? rows : [{ cells: [] }]
    });
  };

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
                key={heading.id}
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
                <Heading
                  foregroundColor={headingForegroundColor}
                  resize={enableResize}
                  // && index === 0 && lockedColumn !== undefined
                >
                  <Title>{heading.title}</Title>
                  <Icons>
                    <ActionItemWrapper>
                      {enableLock && sortingMethod.column === index ? (
                        <ActionItem
                          svg={
                            index === 0 && lockedColumn !== undefined
                              ? lock
                              : lockOpen
                          }
                          onClick={e => {
                            e.stopPropagation();
                            index === 0 && lockedColumn !== undefined
                              ? setLockedColumn(undefined)
                              : setLockedColumn(index);
                          }}
                          color={headingForegroundColor}
                          minimal
                        />
                      ) : (
                        <ActionItem
                          svg={lockOpen}
                          color="transparent"
                          minimal
                        />
                      )}
                    </ActionItemWrapper>
                    {/* // <>
                      //   {index === 0 && lockedColumn !== undefined ? (
                      //     <SVG
                      //       {...lock}
                      //       color={headingForegroundColor}
                      //       size={10}
                      //     />
                      //   ) : (
                      //     <SVG
                      //       {...lockOpen}
                      //       color={headingForegroundColor}
                      //       size={10}
                      //     />
                      //   )}
                      // </> */}
                    {sortingMethod.ascending ? (
                      // <ActionItemWrapper>
                      //   <ActionItem
                      //     svg={expandMore}
                      //     color={`${headingForegroundColor}${
                      //       sortingMethod.column !== index ? "00" : "FF"
                      //     }`}
                      //     padding="0rem"
                      //     minWidth="0rem"
                      //     size={10}
                      //   />
                      // </ActionItemWrapper>
                      <SVG
                        {...expandMore}
                        color={headingForegroundColor}
                        size={14}
                      />
                    ) : (
                      // <ActionItemWrapper>
                      //   <ActionItem
                      //     svg={expandLess}
                      //     color={`${headingForegroundColor}${
                      //       sortingMethod.column !== index ? "00" : "FF"
                      //     }`}
                      //     padding="0rem"
                      //     minWidth="0rem"
                      //     size={10}
                      //   />
                      // </ActionItemWrapper>
                      <SVG
                        {...expandLess}
                        color={headingForegroundColor}
                        size={14}
                      />
                    )}
                  </Icons>
                </Heading>
              </TH>
            ))}
          </TR>
          {enableSearch && (
            <TR>
              {lockedColumn !== undefined ? (
                <TH lockedColumn={lockedColumn !== undefined}>
                  <LeftBox>Search table</LeftBox>
                </TH>
              ) : null}
              <TH
                colSpan={
                  lockedColumn !== undefined
                    ? headings.length - 1
                    : headings.length
                }
              >
                <SearchWrapper>
                  <Search
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onClose={() => setValue("")}
                    onSubmit={() => onSubmit(value.toString().toLowerCase())}
                    padding={1}
                    minimal
                  />
                </SearchWrapper>
              </TH>
            </TR>
          )}
        </THead>
        <TBody
          alternateColor={alternateColor}
          backgroundColor={backgroundColor}
          headingForegroundColor={headingForegroundColor}
          headingBackgroundColor={headingBackgroundColor}
          lockedColumn={lockedColumn !== undefined}
        >
          {data.rows.map((row, index) => (
            <TR
              headingBackgroundColor={headingBackgroundColor}
              headingForegroundColor={headingForegroundColor}
              selected={isEquivalent(row, selectedRow)}
              onClick={() => {
                setSelectedRow(row);
                onClick(row);
              }}
            >
              {row.cells.map(cell => formatCell(cell))}
            </TR>
          ))}
        </TBody>
      </Wrapper>
    </Container>
  );
};

export default Table;
