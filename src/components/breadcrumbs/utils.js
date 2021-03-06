import React, { useState } from "react";
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";

const H3 = styled.h3`
  color: #777777;
`;
const MOCK_CRUMBS = [
  { _id: "1", title: "App" },
  { _id: "2", title: "Category" },
  { _id: "3", title: "Subcategory" },
  { _id: "4", title: "Item" }
];

const BreadcrumbsWrapper = ({ icon, size, color }) => {
  const [selected, setSelected] = useState("None selected");
  return (
    <>
      <H3>Selected: {selected}</H3>
      <Breadcrumbs
        crumbs={MOCK_CRUMBS}
        setSelected={setSelected}
        color={color}
        size={size}
        icon={icon}
      />
    </>
  );
};

export default BreadcrumbsWrapper;
