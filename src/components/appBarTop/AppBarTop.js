import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";

const Container = styled.div`
  font-family: ${DEFAULT_FONT.family};
  display: ${p => (p.flex ? "flex" : "block")};
  min-height: ${p => (p.large ? "6rem" : "auto")};
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  background-color: black;
  color: white;
  transform: ${p => (p.show ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.4s;

  position: sticky;
  overflow: hidden;
  top: 0;
  z-index: 5;
`;

const AppBarTop = ({ children, type = "regular", flex = true }) => {
  if (typeof window === "undefined") return;
  let [pos, setPos] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset;

      if (pos > 100) {
        setVisible(pos > temp);
      } else {
        setVisible(true);
      }
      setPos(temp);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Container large={type !== "regular"} show={visible} flex={flex}>
      {children}
    </Container>
  );
};

export default AppBarTop;
