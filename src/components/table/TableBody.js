import React, { PureComponent } from "react";
import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";
import { isEquivalent } from "../../utils/object";
import { DP_TYPES, MAIN_THEME } from "../../constants/theme";
import { getLinkValues } from "../../utils/markdownParsers";
import { getNumberWithSpaces, roundTwoDec } from "../../utils/numberParsers";
import { TR } from "./Table";

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
const TD = styled.td`
  padding: 0.5rem !important;
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
  return <TD alignRight={isNumber}>{displayCell}</TD>;
};

class TableBody extends PureComponent {
  render() {
    const {
      alternateColor,
      backgroundColor,
      headingForegroundColor,
      headingBackgroundColor,
      lockedColumn,
      data,
      selectedRow,
      onClick
    } = this.props;
    return (
      <TBody
        alternateColor={alternateColor}
        backgroundColor={backgroundColor}
        headingForegroundColor={headingForegroundColor}
        headingBackgroundColor={headingBackgroundColor}
        lockedColumn={lockedColumn !== undefined}
      >
        {data.rows.map(row => (
          <TR
            headingBackgroundColor={headingBackgroundColor}
            headingForegroundColor={headingForegroundColor}
            selected={isEquivalent(row, selectedRow)}
            onClick={() => onClick(row)}
          >
            {row.cells.map(cell => formatCell(cell))}
          </TR>
        ))}
      </TBody>
    );
  }
}

export default TableBody;
