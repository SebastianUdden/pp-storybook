import React, { useState } from "react";
import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";
import SVG from "../svg/SVG";
import { check } from "../../svgs/navigation/check";

// const Select = styled.select`
//   display: block;
//   width: 100%;
//   max-width: 100%;
//   padding: 1rem;
//   line-height: 1.3;
//   appearance: none;
//   font-size: large;
//   font-family: ${DEFAULT_FONT.family};

//   background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
//     linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
//   background-repeat: no-repeat, repeat;
//   background-position: right 0.7em top 50%, 0 0;
//   background-size: 0.65em auto, 100%;
//   :hover {
//     border-color: #888;
//   }
//   :focus {
//     border-color: #aaa;
//     box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
//     box-shadow: 0 0 0 3px -moz-mac-focusring;
//     color: #222;
//     outline: none;
//   }
// `;
// const Option = styled.option``;

const SPACEBAR_KEY_CODE = [0, 32];
const ENTER_KEY_CODE = 13;
const DOWN_ARROW_KEY_CODE = 40;
const UP_ARROW_KEY_CODE = 38;
const ESCAPE_KEY_CODE = 27;

const Container = styled.ul`
  border: 1px solid red;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.foregroundColor};
  list-style: none;
  position: relative;
  border: 1px solid #a2a4b2;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 250px;
  height: 40px;
  cursor: pointer;
  padding: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const Label = styled.li`
  position: absolute;
  top: -1rem;
  left: 0.7rem;
  padding: 0.3rem;
  background: #fff;
  color: #444;
  font-size: 0.8em;
  font-family: Lato, sans-serif;
`;
const Selected = styled.li`
  padding: 10px 0px;
  padding-left: 15px;
  list-style-position: inside;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;

  &:focus {
    outline: 1px solid #00c2ff;
  }
`;
const Arrow = styled.svg`
  position: absolute;
  right: 10px;
  top: 50%;
  transition: transform 0.2s linear;

  &.expanded {
    transform: rotate(-180deg);
  }
`;

const ListContainer = styled.li`
  position: relative;
`;
const List = styled.ul`
  width: 100%;
  position: absolute;
  left: 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 3px 2px 0 #a2a4b2;
  transition: opacity 0.1s cubic-bezier(0, 0, 0.38, 0.9),
    max-height 0.5s cubic-bezier(0, 0, 0.38, 0.9);
  max-height: 0;
  overflow: ${p => (p.showList ? "inherit" : "hidden")};
  opacity: ${p => (p.showList ? 1 : 0)};
`;
const Option = styled.li`
  font-family: Lato, sans-serif;
  padding: 0.2rem 0 0.8rem 1rem;
  transition: background-color 0.1s linear, color 0.1s linear;
  background-color: ${p => p.backgroundColor}99;
  color: ${p => p.foregroundColor};
  list-style-position: inside;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover,
  &:focus {
    background-color: ${p => p.backgroundColorHover};
    color: white;
  }
`;

// const toggleListVisibility = (e) => {
//   let openDropDown =
//     SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

//   if (e.keyCode === ESCAPE_KEY_CODE) {
//     closeList();
//   }

//   if (e.type === "click" || openDropDown) {
//     onClick();
//     // list.classList.toggle("open");
//     // dropdownArrow.classList.toggle("expanded");
//     // listContainer.setAttribute(
//     //   "aria-expanded",
//     //   list.classList.contains("open")
//     // );
//   }

//   if (e.keyCode === DOWN_ARROW_KEY_CODE) {
//     focusNextListItem(DOWN_ARROW_KEY_CODE);
//   }

//   if (e.keyCode === UP_ARROW_KEY_CODE) {
//     focusNextListItem(UP_ARROW_KEY_CODE);
//   }
// };

const Dropdown = ({
  id = "dropdown",
  backgroundColor = "#ffffff",
  backgroundColorHover = "#00c2ff",
  foregroundColor = "#000000",
  label,
  options,
  selected,
  onChange
}) => {
  const [showList, setShowList] = useState(true);
  return (
    <Container
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      {label && <Label>Label</Label>}

      <Selected
        ariaLabelledby={`${id}-label`}
        id={`${id}-selected`}
        tabindex="0"
        onClick={() => setShowList(!showList)}
      >
        {selected}
      </Selected>
      <Arrow width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z"></path>
      </Arrow>

      <ListContainer>
        <List showList={showList}>
          {options.map((option, index) => (
            <Option
              id={`option-${index + 1}`}
              backgroundColor={backgroundColor}
              backgroundColorHover={backgroundColorHover}
              foregroundColor={foregroundColor}
              onClick={() => {
                setShowList(false);
                onChange(option);
              }}
            >
              {option}
              <SVG svg={check} color="red" />
            </Option>
          ))}
        </List>
      </ListContainer>
    </Container>
  );
};

export default Dropdown;
