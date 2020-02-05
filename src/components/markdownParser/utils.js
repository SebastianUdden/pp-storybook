import React, { useState } from "react";
import styled from "styled-components";
import MarkdownParser from "./MarkdownParser";
import ContainedButton from "../button/ContainedButton";
import MarkdownEditor from "./MarkdownEditor";
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes";

const MARKDOWN_TEST = `
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
This is some awesome-possum markdown that I'm https://www.google.com displaying, it contains both **bold**, *italic*, ~~scratched~~, \`\`\`var something = {
  prop: "Somenew"
}\`\`\`
A link to https://www.google.com here \`Some code here \`
Some cool text about nothing on repeat here, just to get \`\`a sence of the paragraph\`\` spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing... Some cool text about nothing on repeat here, just to get a sence of the paragraph spacing...

## P/E
P/E
- P/E
1. P/E
___
## Quotes
> This is a quote
> It's a pretty neat way to display information
## Lists
#### Unordered
- first
- second [google link](https://www.google.com)
- third
#### Ordered
1. First
1. Second
1. Third
1. Second
1. Third

## The other markdown
---
There is also additional markdown like 
- links 
- [google link](https://www.google.com)
-  https://www.google.com
- images
![images](https://cdn.getyourguide.com/img/tour_img-1139999-148.jpg "Alternate text"){100%}
----------
`;

export const surroundAtCaret = (areaId, surroundWith) => {
  var txtarea = document.getElementById(areaId);
  const scrollPos = txtarea.scrollTop;
  var caretPos = txtarea.selectionStart;

  var front = txtarea.value.substring(0, caretPos);
  var back = txtarea.value.substring(
    txtarea.selectionEnd,
    txtarea.value.length
  );
  const selected = txtarea.value.substring(caretPos, txtarea.selectionEnd);
  const text = `${surroundWith}${selected}${surroundWith}`;
  txtarea.value = `${front}${text}${back}`;
  caretPos = caretPos + text.length;
  txtarea.selectionStart = caretPos;
  txtarea.selectionEnd = caretPos;
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
  return txtarea.value;
};

export const insertAtLineStart = (areaId, insert) => {
  var txtarea = document.getElementById(areaId);
  const scrollPos = txtarea.scrollTop;
  var caretPos = txtarea.selectionStart;

  var front = txtarea.value.substring(0, caretPos);
  var back = txtarea.value.substring(
    txtarea.selectionEnd,
    txtarea.value.length
  );
  const selected = txtarea.value.substring(caretPos, txtarea.selectionEnd);
  const text = `${insert}${selected}`;
  const beforeNewline = front.substring(0, front.lastIndexOf("\n") + 1);
  const afterNewline = front.substring(
    front.lastIndexOf("\n") + 1,
    front.length
  );
  txtarea.value = `${beforeNewline}${text}${afterNewline}${back}`;
  caretPos = caretPos + text.length;
  txtarea.selectionStart = caretPos;
  txtarea.selectionEnd = caretPos;
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
  return txtarea.value;
};

export const insertAtCaret = (areaId, insert) => {
  var txtarea = document.getElementById(areaId);
  const scrollPos = txtarea.scrollTop;
  var caretPos = txtarea.selectionStart;

  var front = txtarea.value.substring(0, caretPos);
  var back = txtarea.value.substring(
    txtarea.selectionEnd,
    txtarea.value.length
  );
  const selected = txtarea.value.substring(caretPos, txtarea.selectionEnd);
  const text = `${selected}${insert}`;
  txtarea.value = `${front}${text}${back}`;
  caretPos = caretPos + text.length;
  txtarea.selectionStart = caretPos;
  txtarea.selectionEnd = caretPos;
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
  return txtarea.value;
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${MEDIA_MIN_MEDIUM} {
    flex-direction: row;
    textarea {
      width: 50vw;
      margin-right: 3rem;
    }
  }
`;

export const MarkdownWrapper = styled.div`
  color: ${p => p.color};
  margin: 1rem;
  padding: 1rem 0;
  strong {
    font-weight: 800;
    color: #555555;
  }

  em {
    color: red;
  }

  ul li {
    padding: 0.1rem;
    list-style: square;
  }

  a {
    text-decoration: none;
    color: orange;
    font-weight: 600;
  }

  code {
    background-color: #999999;
    color: #000000;
    padding: 0.3rem;
  }
`;

const MarkdownParserWrapper = ({ MarkdownWrapper }) => {
  const [parse, setParse] = useState(true);
  const [showHtml, setShowHtml] = useState(false);
  const [markdown, setMarkdown] = useState({ meta: {}, body: MARKDOWN_TEST });

  return (
    <div>
      <ContainedButton onClick={() => setParse(true)}>
        Format markdown
      </ContainedButton>
      <ContainedButton onClick={() => setParse(false)}>
        Raw markdown
      </ContainedButton>
      {parse && (
        <ContainedButton onClick={() => setShowHtml(!showHtml)}>
          Toggle parsed HTML
        </ContainedButton>
      )}
      <hr />
      <FlexWrapper>
        <MarkdownEditor
          color="#888888"
          markdown={markdown}
          setMarkdown={setMarkdown}
        />
        {MarkdownWrapper ? (
          <MarkdownParser
            color="#888888"
            markdown={markdown}
            parse={parse}
            showHtml={showHtml}
          />
        ) : (
          <MarkdownParser
            color="#888888"
            markdown={markdown}
            parse={parse}
            showHtml={showHtml}
            StyledWrapper={MarkdownWrapper}
          />
        )}
      </FlexWrapper>
    </div>
  );
};

export default MarkdownParserWrapper;
