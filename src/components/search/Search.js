import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { arrowBack } from "../../svgs/navigation/arrow-back";
import { close } from "../../svgs/navigation/close";
import ActionItem from "../actionItem/ActionItem";
import useKeyPress from "../../hooks/keyPress";
import { DEFAULT_FONT } from "../../constants/font";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #111;
  width: 100%;
`;

const Input = styled.input`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  width: 100%;
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

  ${p =>
    p.minimal &&
    css`
      font-size: x-small;
      padding: 0 0.5rem;
      margin: 0;
    `};
`;

const ActionItemWrapper = styled.div``;

const Search = ({
  previousSearchValue,
  value,
  onChange,
  onBack,
  onClose,
  onSubmit,
  padding,
  minimal
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
      (document && document.activeElement !== document.getElementById("Search"))
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
          <ActionItem
            svg={arrowBack}
            color="#111111"
            padding={padding}
            noBorder
            minimal={minimal}
          />
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
        minimal={minimal}
      />
      <ActionItemWrapper onClick={onClose}>
        <ActionItem
          svg={close}
          color="#111111"
          padding={padding}
          minimal={minimal}
          noBorder
        />
      </ActionItemWrapper>
    </Wrapper>
  );
};

export default Search;
