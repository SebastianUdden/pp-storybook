import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { arrowBack } from "../../svgs/navigation/arrow-back";
import { close } from "../../svgs/navigation/close";
import ActionItem from "../actionItem/ActionItem";
import useKeyPress from "../../hooks/keyPress";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #111;
  width: 100%;
`;

const Input = styled.input`
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: x-large;
  color: #555;
  padding: 0 0 0 ${p => (p.previousSearchValue ? "0.2rem" : "2rem")};
  border: none;
  outline: none;
  transform: ${p => (p.animate ? `translateY(0%)` : `translateY(100%)`)};
  transition: transform 0.2s;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

const ActionItemWrapper = styled.div``;

const Search = ({
  previousSearchValue,
  value,
  onChange,
  onBack,
  onClose,
  onSubmit
}) => {
  const [animate, setAnimate] = useState(false);
  const firstUpdate = useRef(true);
  const enter = useKeyPress("Enter");

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    if (
      firstUpdate.current ||
      document.activeElement !== document.getElementById("Search")
    ) {
      firstUpdate.current = false;
      return;
    }
    onSubmit(value);
  }, [enter]);

  return (
    <Wrapper>
      {previousSearchValue && (
        <ActionItemWrapper onClick={onBack}>
          <ActionItem svg={arrowBack} color="#111111" noBorder />
        </ActionItemWrapper>
      )}
      <Input
        id="Search"
        type="search"
        placeholder="Search"
        previousSearchValue={previousSearchValue}
        value={value}
        onChange={onChange}
        animate={animate}
      />
      <ActionItemWrapper onClick={onClose}>
        <ActionItem svg={close} color="#111111" noBorder />
      </ActionItemWrapper>
    </Wrapper>
  );
};

export default Search;
