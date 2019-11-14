import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import { arrowDown } from "../../svgs/navigation/arrow-down";

const H3 = styled.h3`
  color: white;
`;
const MOCK_CRUMBS = ["App", "Category", "Subcategory", "Item"];
storiesOf("Breadcrumbs", module)
  .add("default", () => {
    const [selected, setSelected] = useState("None selected");
    return (
      <>
        <H3>Selected: {selected}</H3>
        <Breadcrumbs
          crumbs={MOCK_CRUMBS}
          setSelected={setSelected}
          size="medium"
        />
      </>
    );
  })
  .add("children", () => {
    const [selected, setSelected] = useState("None selected");
    return (
      <>
        <H3>Selected: {selected}</H3>
        <Breadcrumbs
          crumbs={MOCK_CRUMBS}
          setSelected={setSelected}
          size="medium"
          icon={null}
        />
      </>
    );
  });
