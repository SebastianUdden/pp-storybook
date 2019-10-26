import React from "react";
import styled from "styled-components";
import FabButton from "../button/FabButton";
import { moreVertical } from "../../svgs/navigation/more-vertical";
import SVG from "../svg/SVG";
import { reply } from "../../svgs/content/reply";
import { moreHorizontal } from "../../svgs/navigation/more-horizontal";

const Overflow = styled.div`
  display: flex;
  ${p =>
    p.position &&
    `
    position: ${p.position.position};
    top: ${p.position.top || "auto"};
    bottom: ${p.position.bottom || "auto"};
    right: ${p.position.right || "auto"};
  `}
  flex-direction: ${p => p.direction};
  width: ${p => (p.direction.includes("column") ? "4rem" : "auto")};
`;

const OverflowMenu = ({
  isOpen = false,
  direction = "column",
  foregroundColor = "white",
  onClick,
  position,
  children
}) => {
  return (
    <Overflow direction={direction} position={position}>
      {isOpen ? (
        <>
          {onClick && (
            <FabButton onClick={onClick}>
              <SVG color={foregroundColor} {...reply} size={24} />
            </FabButton>
          )}
          {children}
        </>
      ) : (
        onClick && (
          <FabButton onClick={onClick}>
            <SVG
              color={foregroundColor}
              {...(direction.includes("column")
                ? moreVertical
                : moreHorizontal)}
              size={24}
            />
          </FabButton>
        )
      )}
    </Overflow>
  );
};

export default OverflowMenu;
