import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chip from "./Chip";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Chips = ({ chips = [], onChange }) => {
  const [selectedChips, setSelectedChips] = useState([]);

  const onClick = e => {
    if (selectedChips.find(chip => chip === e.target.value)) {
      setSelectedChips(selectedChips.filter(chip => chip !== e.target.value));
    } else {
      setSelectedChips([...selectedChips, e.target.value]);
    }
  };

  useEffect(() => onChange(selectedChips), [selectedChips]);

  return (
    <Wrapper>
      {chips.map(chip => (
        <Chip
          onClick={onClick}
          selected={selectedChips.find(c => chip === c)}
          chip={chip}
        />
      ))}
    </Wrapper>
  );
};

export default Chips;
