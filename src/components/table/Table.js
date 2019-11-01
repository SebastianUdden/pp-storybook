import React from "react";
import styled from "styled-components";
import { DP_TYPES, MAIN_THEME } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";
import { getLinkValues } from "../../utils/markdownParsers";
import { getNumberWithSpaces, round } from "../../utils/numberParsers";

const Wrapper = styled.table`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  width: 100%;
  box-shadow: ${DP_TYPES.DP6};
  background-color: ${p => p.backgroundColor};
  border-collapse: collapse;
`;
const THead = styled.thead`
  border-bottom: 2px solid ${p => p.alternateColor};
  background-color: ${p => p.headingBackgroundColor};
  color: ${p => p.headingForegroundColor};
  padding: 2rem;
`;
const TBody = styled.tbody`
  tr:nth-child(odd) td {
    background-color: ${p => p.alternateColor};
  }
`;
const TH = styled.th`
  text-align: left;
  padding: 0.5rem 1rem;
  background-color: ${p => p.backgroundColor}22;
  text-align: ${p => (p.alignRight ? "right" : "left")};
`;
const TR = styled.tr`
  :hover {
    cursor: pointer;
    box-shadow: ${DP_TYPES.DP6};

    td {
      color: ${p => p.headingForegroundColor};
      background-color: ${p => p.headingBackgroundColor}BB !important;
    }
  }
`;
const TD = styled.td`
  padding: 0.5rem 1rem;
  text-align: ${p => (p.alignRight ? "right" : "left")};
`;

const Link = styled.a`
  font-family: ${DEFAULT_FONT.family};
  color: ${p => p.foregroundColor};
  text-decoration: none;
  font-weight: 800;
`;

const Table = ({
  headings,
  data,
  headingForegroundColor = "#000000",
  headingBackgroundColor = "#DDDDDD",
  backgroundColor = "#DDDDDD",
  alternateColor = "#BBBBBB"
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <THead
        headingForegroundColor={headingForegroundColor}
        headingBackgroundColor={headingBackgroundColor}
        alternateColor={alternateColor}
      >
        <TR>
          {headings.map(heading => (
            <TH
              backgroundColor={backgroundColor}
              alignRight={heading.alignRight}
            >
              {heading.title}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody alternateColor={alternateColor}>
        {data.rows.map(row => (
          <TR
            headingBackgroundColor={headingBackgroundColor}
            headingBackgroundColor={headingBackgroundColor}
          >
            {row.cells.map(cell => {
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
                displayCell = getNumberWithSpaces(round(cell));
              } else {
                displayCell = cell;
              }
              return <TD alignRight={isNumber}>{displayCell}</TD>;
            })}
          </TR>
        ))}
      </TBody>
    </Wrapper>
  );
};

export default Table;
