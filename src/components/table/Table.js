import React from "react";
import styled from "styled-components";
import { DP_TYPES } from "../../constants/theme";
import { DEFAULT_FONT } from "../../constants/font";

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
`;
const TR = styled.tr``;
const TD = styled.td`
  padding: 0.5rem 1rem;
`;

const Table = ({
  headings,
  data,
  backgroundColor = "#DDDDDD",
  alternateColor = "#BBBBBB"
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <THead alternateColor={alternateColor}>
        <TR>
          {headings.map(heading => (
            <TH backgroundColor={backgroundColor}>{heading}</TH>
          ))}
        </TR>
      </THead>
      <TBody alternateColor={alternateColor}>
        {data.rows.map(row => (
          <TR>
            {row.cells.map(cell => (
              <TD>{cell}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </Wrapper>
  );
};

export default Table;
