import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: ${p => p.height};
  background-color: ${p => p.backgroundColor};
  color: ${p => p.color};
  outline: none;
  padding: 0.5rem 1rem;
`;

const MarkdownEditor = ({
  markdown,
  setMarkdown,
  color = "#ffffff",
  backgroundColor = "inherit"
}) => {
  const [height, setHeight] = useState("auto");
  useEffect(() => {
    setHeight(document.getElementById("MarkdownEditor").scrollHeight + "px");
  }, []);
  return (
    <TextArea
      id="MarkdownEditor"
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
