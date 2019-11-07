import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chip from "./Chip";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Chips = ({ chips = [], allowMultiple, onChange }) => {
  const [selectedChips, setSelectedChips] = useState([]);

  const onClick = e => {
    if (!allowMultiple) {
      setSelectedChips([e.target.value]);
      return;
    }
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
          key={chip.title}
          onClick={onClick}
          selected={selectedChips.find(c => chip.title === c)}
          chip={chip.title}
          allowMultiple={allowMultiple}
          customIcon={chip.icon}
        />
      ))}
    </Wrapper>
  );
};

export default Chips;
