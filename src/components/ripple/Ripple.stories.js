import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Ripple from "./Ripple";
import ContainedButton from "../button/ContainedButton";
import TextButton from "../button/TextButton";
import FabButton from "../button/FabButton";
import OutlineButton from "../button/OutlineButton";

const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

storiesOf("Ripple", module).add("default - buttons", () => (
  <FlexWrapper>
    <ContainedButton onClick={() => console.log("Click button")}>
      Ripple
    </ContainedButton>
    <OutlineButton onClick={() => console.log("Click button")}>
      Ripple
    </OutlineButton>
    <TextButton onClick={() => console.log("Click button")}>Ripple</TextButton>
    <FabButton onClick={() => console.log("Click button")}>+</FabButton>
  </FlexWrapper>
));
