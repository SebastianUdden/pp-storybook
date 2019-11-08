import React from "react";
import styled from "styled-components";
import { DEFAULT_FONT } from "../../constants/font";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Scrim = styled.div`
  position: fixed;
  transform: ${p => (p.hide ? "translateX(-130%)" : "translate(0)")};
  transition: opacity 1s;
  opacity: ${p => (p.hide ? 0 : 0.6)};
  z-index: 90;
  top: 0;
  bottom: 0;
  right: 0;
  left: 20%;
  background-color: ${p => p.backgroundColor};
`;

const Wrapper = styled.div`
  font-family: ${DEFAULT_FONT.family};
  position: fixed;
  margin: 0 auto;
  transform: ${p => (p.hide ? "translateX(-110%)" : "translate(0)")};
  transition: transform 0.3s;
  z-index: 100;

  top: 0;
  left: 0;
  right: 20%;
  bottom: 0;
  padding: 1rem;
  min-height: 100vh;
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  box-shadow: ${p => p.boxShadow};
  overflow-y: scroll;
`;

const NavigationDrawer = ({
  boxShadow,
  color,
  backgroundColor,
  children,
  buttonElementId,
  onHide,
  hide
}) => {
  if (typeof window === "undefined") return null;
  document.addEventListener("click", evt => {
    const flyoutElement = document.getElementById("navigation-drawer");
    const buttonElement = document.getElementById(buttonElementId);
    let targetElement = evt.target; // clicked element
    do {
      if (targetElement == flyoutElement || targetElement == buttonElement) {
        // This is a click inside. Do nothing, just return.
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    onHide();
  });

  return (
    <Container>
      <Wrapper
        id="navigation-drawer"
        boxShadow={boxShadow}
        color={color}
        backgroundColor={backgroundColor}
        hide={hide}
      >
        {children}
      </Wrapper>
      <Scrim
        onClick={e => e.stopPropagation()}
        hide={hide}
        backgroundColor={color}
      />
    </Container>
  );
};

export default NavigationDrawer;
