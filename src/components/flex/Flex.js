// TODO Fix flex
import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${p => p.wrap};
  flex-direction: ${p => p.direction};
  justify-content: ${p => p.alignHorizontal};
  align-items: ${p => p.alignVertical};
`;

const Flex = ({
  alignHorizontal = "flex-start",
  alignVertical = "flex-start",
  direction = "row",
  wrap = "wrap",
  children
}) => {
  return (
    <FlexWrapper
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      direction={direction}
      wrap={wrap}
    >
      {children}
    </FlexWrapper>
  );
};

export default Flex;
