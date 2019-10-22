import React, { useState } from "react";
import styled from "styled-components";
import { arrowBack } from "../../svgs/navigation/arrow-back";
import { close } from "../../svgs/navigation/close";
import ActionItem from "../actionItem/ActionItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #111;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  color: #555;
  padding: 0 2rem 0 ${p => (p.previousSearchValue ? "0.2rem" : "2rem")};
  border: none;
  outline: none;
`;

const ActionItemWrapper = styled.div``;

const Search = ({ previousSearchValue, value, onChange, onBack, onClose }) => {
  return (
    <Wrapper>
      {previousSearchValue && (
        <ActionItemWrapper onClick={onBack}>
          <ActionItem svg={arrowBack} color="#111" noBorder />
        </ActionItemWrapper>
      )}
      <Input
        id="Search"
        placeholder="Search"
        previousSearchValue={previousSearchValue}
        value={value}
        onChange={onChange}
      />
      <ActionItemWrapper onClick={onClose}>
        <ActionItem svg={close} color="#111" noBorder />
      </ActionItemWrapper>
    </Wrapper>
  );
};

export default Search;
