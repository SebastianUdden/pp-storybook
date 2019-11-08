import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { MEDIA_MAX_SMALL, MEDIA_MIN_LARGE } from "../../constants/sizes";
import {
  FADED_TEXT_COLOR,
  TRANSITION_DURATION,
  PRIMARY_BACKGROUND,
  ON_SURFACE,
  DP6,
  ON_BACKGROUND,
  HIGH_EMPHASIS,
  ON_PRIMARY_BACKGROUND
} from "../../constants/theme";
import SVG from "../svg/SVG";
import { cross } from "../../svgs/generic/cross";
import { DEFAULT_FONT } from "../../constants/font";

const Overlay = styled.div`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  top: 0;
  left: 0;
  background-color: rgba(0, 8, 28, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  opacity: ${p => (p.isAnimating ? 0 : 1)};
  transition: opacity ${TRANSITION_DURATION}ms ease;
  padding: 0.5rem;
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InnerModal = styled.div`
  padding: 1rem;
  background-color: ${PRIMARY_BACKGROUND};
  color: ${ON_BACKGROUND};
  border-radius: 0;
  width: auto;
  display: block;
  position: relative;
  z-index: 2;
  height: auto;
  max-width: 100%;
  margin: 40px 20px;

  /* box-shadow: ${DP6}; */
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.13), 0 3px 9px 0 rgba(0, 0, 0, 0.19);
  
  ${MEDIA_MIN_LARGE} {
    margin: 40px auto;
    width: 705px;
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid
    ${p => (p.hasTitle ? FADED_TEXT_COLOR : "transparent")};
  opacity: ${HIGH_EMPHASIS};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  margin-bottom: 1rem;
  padding: 0rem 2rem 0rem 0.5rem;

  > h3 {
    margin: 0;
  }

  ${MEDIA_MAX_SMALL} {
    min-height: 45px;
    > h3 {
      margin-top: 1px;
    }
  }
`;

const Close = styled.button`
  padding: 0;
  margin: -1rem -0.5rem;
  border: 0;
  position: absolute;
  cursor: pointer;
  color: ${ON_SURFACE};
  transition: all 300ms ease;
  top: 65%;
  transform: translateY(-50%);
  display: flex;
  right: 32px;
  background-color: transparent;

  > svg {
    fill: ${ON_SURFACE};
    height: 10px;
    width: 10px;
  }

  ${MEDIA_MAX_SMALL} {
    right: 20px;

    > svg {
      height: 12px;
      width: 12px;
    }
  }

  :hover {
    > svg {
      fill: ${ON_PRIMARY_BACKGROUND};
    }
  }
`;

const onOverlayClick = (e, onClose) => {
  e.preventDefault();
  e.stopPropagation();
  onClose();
};

const Modal = ({ children, title, onClose, open }) => {
  if (typeof window === "undefined") return;
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, TRANSITION_DURATION);
  }, [open, setIsAnimating]);

  return typeof window !== "undefined" && open
    ? createPortal(
        <Overlay
          onClick={e => onOverlayClick(e, onClose)}
          isAnimating={isAnimating}
        >
          <Wrapper>
            <InnerModal onClick={e => e.stopPropagation()}>
              <Header hasTitle={title}>
                <h3>{title}</h3>
                <Close onClick={onClose}>
                  <SVG color={"white"} {...cross} size={24} />
                </Close>
              </Header>
              {children}
            </InnerModal>
          </Wrapper>
        </Overlay>,
        document.body
      )
    : null;
};

export default Modal;
