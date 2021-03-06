import React from "react";
import styled from "styled-components";
import { useCarousel } from "./useCarousel";

const Wrapper = styled.div`
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  transform: ${p => p.transform};
  width: ${p => p.width};
  left: ${p => p.left};
  transition: ${p => p.transition};
`;
const Item = styled.div`
  width: ${p => p.width}%;
`;

const Carousel = ({ slides = [], interval = 3000 }) => {
  const length = slides.length;
  if (!length) return null;
  const ELEMENT_PX_WIDTH =
    document.getElementById("firstItem") &&
    document.getElementById("firstItem").getBoundingClientRect().width;
  const { active, handlers, style } = useCarousel(
    length,
    interval,
    ELEMENT_PX_WIDTH
  );
  const ITEM_WIDTH = length * (100 / (length + 2));

  return length > 1 ? (
    <Wrapper>
      <Content {...handlers} {...style} active={active}>
        <Item id="firstItem" width={ITEM_WIDTH / length}>
          {length > 1 ? slides[length - 1] : slides[0]}
        </Item>
        {slides.map((slide, index) => (
          <Item key={index} width={ITEM_WIDTH / length}>
            {slide}
          </Item>
        ))}
        <Item width={ITEM_WIDTH / length}>{slides[0]}</Item>
      </Content>
    </Wrapper>
  ) : (
    <Item width="100%">{slides[0]}</Item>
  );
};

export default Carousel;
