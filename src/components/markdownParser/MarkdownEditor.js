import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DP6 } from "../../constants/theme";
import SVG from "../svg/SVG";
import { formatAlignCenter } from "../../svgs/editor/format-align-center";
import { formatAlignLeft } from "../../svgs/editor/format-align-left";
import { formatAlignRight } from "../../svgs/editor/format-align-right";
import { formatBold } from "../../svgs/editor/format-bold";
import { formatItalic } from "../../svgs/editor/format-italic";
import { formatUnderlined } from "../../svgs/editor/format-underlined";
import { formatListBulleted } from "../../svgs/editor/format-list-bulleted";
import { formatListNumbered } from "../../svgs/editor/format-list-numbered";
import { formatSize } from "../../svgs/editor/format-size";
import { insertLink } from "../../svgs/editor/insert-link";
import TextButton from "../button/TextButton";
import { surroundAtCaret, insertAtLineStart } from "./utils";

const FlexWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #333333;
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
  padding: 0;
  margin: 0 0.3rem 0 0;
  background-color: inherit;
  border: none;
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
        <Button
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
        </Button>
        <Button
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
        </Button>
        <Button
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
        </Button>
        <Button
          color={color}
          onClick={() => {
            surroundAtCaret(id, "**");
            setMarkdown({
              ...markdown,
              body: body.markdown
            });
          }}
        >
          <SVG {...formatBold} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            surroundAtCaret(id, "*");
          }}
        >
          <SVG {...formatItalic} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            surroundAtCaret(id, "__");
          }}
        >
          <SVG {...formatUnderlined} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            insertAtLineStart(id, "- ");
          }}
        >
          <SVG {...formatListBulleted} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            insertAtLineStart(id, "1. ");
          }}
        >
          <SVG {...formatListNumbered} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            insertAtLineStart(id, "## ");
          }}
        >
          <SVG {...formatSize} color={color} />
        </Button>
        <Button
          color={color}
          onClick={() => {
            insertAtLineStart(id, "[]()");
          }}
        >
          <SVG {...insertLink} color={color} />
        </Button>
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
