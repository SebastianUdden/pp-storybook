import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DP_TYPES } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";
import { expandMore } from "../../svgs/navigation/expand-more";
import { expandLess } from "../../svgs/navigation/expand-less";
import { lock } from "../../svgs/actions/lock";
import ActionItem from "../actionItem/ActionItem";
import { lockOpen } from "../../svgs/actions/lock-open";
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes";
import Search from "../search/Search";
import SVG from "../svg/SVG";
import Chip from "../chips/Chip";
import TableBody from "./TableBody";

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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

const TH = styled.th`
  text-align: left;
  padding: 0.5rem !important;
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
export const TR = styled.tr`
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

const sortData = (data, sortingMethod) => {
  const dataPoint = data.rows[0].cells[sortingMethod.column];
  const numericDataPoint = Number(dataPoint);
  const isNan = numericDataPoint !== numericDataPoint;
  const isDate = numericDataPoint != dataPoint;
  const isString = isNan || isDate;

  data.rows.sort((first, second) => {
    const a = sortingMethod.ascending ? first : second;
    const b = sortingMethod.ascending ? second : first;
    if (isString) {
      const stringA = a.cells[sortingMethod.column] || "";
      const stringB = b.cells[sortingMethod.column] || "";
      return stringA.toString().localeCompare(stringB.toString());
    } else {
      return a.cells[sortingMethod.column] - b.cells[sortingMethod.column];
    }
  });

  return data;
};

const SearchTable = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <SearchWrapper>
      <Search
        value={value}
        onChange={e => setValue(e.target.value)}
        onClose={() => setValue("")}
        onSubmit={value => {
          onSubmit(value.toString().toLowerCase());
          setValue("");
        }}
        padding={1}
      />
    </SearchWrapper>
  );
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
  const [filterValues, setFilterValues] = useState([]);
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
    if (filterValues.find(filterValue => filterValue === value)) return;
    setFilterValues([...filterValues, value].filter(Boolean));
  };

  useEffect(() => {
    if (!filterValues.length) {
      setData({
        ...data,
        rows: inputData.rows
      });
      return;
    }
    const rows = inputData.rows.filter(row =>
      filterValues.every(filterValue =>
        row.cells.some(cell =>
          cell
            .toString()
            .toLowerCase()
            .includes(filterValue)
        )
      )
    );
    setData({
      ...data,
      rows: rows.length ? rows : [{ cells: [] }]
    });
  }, [filterValues]);

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
                <SearchTable onSubmit={onSubmit} />
                <FlexWrapper>
                  {filterValues.map(fv => (
                    <Chip
                      key={fv}
                      chip={fv}
                      onClick={e =>
                        setFilterValues(
                          filterValues.filter(fv => fv !== e.target.value)
                        )
                      }
                      showRemove
                    />
                  ))}
                </FlexWrapper>
              </TH>
            </TR>
          )}
        </THead>
        <TableBody
          alternateColor={alternateColor}
          backgroundColor={backgroundColor}
          headingForegroundColor={headingForegroundColor}
          headingBackgroundColor={headingBackgroundColor}
          lockedColumn={lockedColumn}
          selectedRow={selectedRow}
          data={data}
          onClick={row => {
            setSelectedRow(row);
            onClick(row);
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default Table;
