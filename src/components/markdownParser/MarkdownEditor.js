import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DP6 } from "../../../../../src/constants/theme";

const TextArea = styled.textarea`
  width: 100%;
  height: ${p => p.height};
  background-color: ${p => p.backgroundColor};
  color: ${p => p.color};
  outline: none;
  border: none;
  box-shadow: ${DP6};
  padding: 0.5rem;
  resize: vertical;
`;

const MarkdownEditor = ({
  id = "MarkdownEditor" + Math.random() * Math.random() * 100,
  markdown,
  setMarkdown,
  color = "#ffffff",
  backgroundColor = "inherit"
}) => {
  const [height, setHeight] = useState("auto");
  useEffect(() => {
    setHeight(document.getElementById(id).scrollHeight + "px");
  }, []);
  return (
    <TextArea
      id={id}
      height={height}
      value={markdown}
      onChange={e => {
        setMarkdown(e.target.value);
      }}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
};

export default MarkdownEditor;
