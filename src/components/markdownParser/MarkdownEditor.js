import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DP6 } from "../../constants/theme";
import SVG from "../svg/SVG";
import { formatAlignCenter } from "../../svgs/editor/format-align-center";
import { formatAlignLeft } from "../../svgs/editor/format-align-left";
import { formatAlignRight } from "../../svgs/editor/format-align-right";
import ToggleButton from "../button/ToggleButton";

const FlexWrapper = styled.div`
  display: flex;
`;

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

const Button = styled.button`
  width: 100%;
  border: 1px solid inherit;
  background-color: inherit;
  color: ${p => p.color};
`;

const MarkdownEditor = ({
  id = "MarkdownEditor" + Math.random() * Math.random() * 100,
  placeholder = "Description",
  markdown,
  setMarkdown,
  color = "#777777",
  backgroundColor = "inherit"
}) => {
  const [height, setHeight] = useState("auto");
  useEffect(() => {
    setHeight(document.getElementById(id).scrollHeight + "px");
  }, []);
  return (
    <div>
      <FlexWrapper>
        <ToggleButton
          color={color}
          onClick={() =>
            setMarkdown({
              meta: { justifyContent: "flex-start" },
              body: markdown.body
            })
          }
          selected={markdown.meta.justifyContent === "flex-start"}
        >
          <SVG {...formatAlignLeft} color={color} />
        </ToggleButton>
        <ToggleButton
          color={color}
          onClick={() =>
            setMarkdown({
              meta: { justifyContent: "center" },
              body: markdown.body
            })
          }
          selected={markdown.meta.justifyContent === "center"}
        >
          <SVG {...formatAlignCenter} color={color} />
        </ToggleButton>
        <ToggleButton
          color={color}
          onClick={() =>
            setMarkdown({
              meta: { justifyContent: "flex-end" },
              body: markdown.body
            })
          }
          selected={markdown.meta.justifyContent === "flex-end"}
        >
          <SVG {...formatAlignRight} color={color} />
        </ToggleButton>
      </FlexWrapper>
      <TextArea
        id={id}
        placeholder={placeholder}
        height={height}
        value={markdown.body}
        onChange={e => {
          setMarkdown({
            meta: markdown.meta,
            body: e.target.value
          });
        }}
        color={color}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default MarkdownEditor;
