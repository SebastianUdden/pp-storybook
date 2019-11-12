import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DefaultMarkdownWrapper = styled.div`
  color: ${p => p.color};
  margin: 0;
  padding: 0;
  strong {
    font-weight: 800;
    color: #555555;
  }

  em {
    color: #999999;
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
    padding: 0.1rem;
  }

  blockquote {
    background-color: inherit;
    border-left: 0.3rem solid #ffffff66;
    opacity: 0.8;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
  }

  blockquote p {
    display: inline;
  }
`;

const STRONG_REGEX = /\*\*(\S(.*?\S)?)\*\*/gm;
const EM_REGEX = /\*(\S(.*?\S)?)\*/gm;
const CODE_REGEX = /\`(\S(.*?\S)?)\`/gm;
const SCRATCH_REGEX = /\~\~(\S(.*?\S)?)\~\~/gm;
const HEADER6_REGEX = /######.([\w|\s]*)/g;
const HEADER5_REGEX = /#####.([\w|\s]*)/g;
const HEADER4_REGEX = /####.([\w|\s]*)/g;
const HEADER3_REGEX = /###.([\w|\s]*)/g;
const HEADER2_REGEX = /##.([\w|\s]*)/g;
const HEADER1_REGEX = /#.([\w|\s]*)/g;
const NEWLINE_REGEX = /[\n\r]/g;
const QUOTE_REGEX = /(?:^|\n)[ \t]*>([ \t]*\S(?:(?!\n(\s*\n)+[^>\s])[\s\S])*)/gm;
const UNORDERED_LIST_REGEX = /\*.([\w|\s|:|\/|\.|\'|\[|\]\(|\)]*)/g;
const ORDERED_LIST_REGEX = /\d\.\s([\w|\s|:|\/|\.|\'|\[|\]\(|\)]*)/g;
const HORIZONTAL_LINE_REGEX = /([-|_]{3,})/g;
const IMAGE_REGEX = /!\[([\w|\s]*)\]\((https:\/\/[^\s]*)\s"(.*)"\)/g;
const LINK_REGEX = /\[([\w|\s]*)\]\((https:\/\/.*)\)/g;
const SIMPLE_LINK_REGEX = /\s(https:\/\/[^\s]*)/g;

const getL = (list, l, i, regexp) => {
  const isNextLi = regexp.test(list[i + 1]);
  const isCurrentLi = l.match(regexp);
  if (isCurrentLi && isNextLi) {
    const isPrevLi = regexp.test(list[i - 1]);
    if (isPrevLi) {
      return undefined;
    } else {
      return "first";
    }
  } else if (isCurrentLi) {
    return "last";
  } else {
    return undefined;
  }
};
const getUl = (list, l, i) => getL(list, l, i, UNORDERED_LIST_REGEX);
const getOl = (list, l, i) => getL(list, l, i, ORDERED_LIST_REGEX);

const MarkdownParser = ({
  color,
  markdown,
  parse = true,
  StyledWrapper = DefaultMarkdownWrapper,
  showHtml = false
}) => {
  const [text, setText] = useState(markdown.split(NEWLINE_REGEX));

  useEffect(() => {
    if (parse) {
      const strong = markdown.replace(STRONG_REGEX, `<strong>$1</strong>`);
      const em = strong.replace(EM_REGEX, `<em>$1</em>`);
      const scratch = em.replace(SCRATCH_REGEX, `<strike>$1</strike>`);
      const code = scratch.replace(CODE_REGEX, `<code>$1</code>`);
      const newLines = code.split(NEWLINE_REGEX);

      const formattedLines = newLines.map((l, index) => {
        const ul = getUl(newLines, l, index);
        const ol = getOl(newLines, l, index);
        return l
          .replace(HEADER6_REGEX, "<h6>$1</h6>")
          .replace(HEADER5_REGEX, "<h5>$1</h5>")
          .replace(HEADER4_REGEX, "<h4>$1</h4>")
          .replace(HEADER3_REGEX, "<h3>$1</h3>")
          .replace(HEADER2_REGEX, "<h2>$1</h2>")
          .replace(HEADER1_REGEX, "<h1>$1</h1>")
          .replace(QUOTE_REGEX, "<blockquote>$1</blockquote>")
          .replace(
            UNORDERED_LIST_REGEX,
            `${ul === "first" ? "<ul>" : ""}<li>$1</li>${
              ul === "last" ? "</ul>" : ""
            }`
          )
          .replace(
            ORDERED_LIST_REGEX,
            `${ol === "first" ? "<ol>" : ""}<li>$1</li>${
              ol === "last" ? "</ol>" : ""
            }`
          )
          .replace(HORIZONTAL_LINE_REGEX, "<hr>")
          .replace(IMAGE_REGEX, "<img src='$2' alt='$1' title='$3' />")
          .replace(LINK_REGEX, "<a href='$2' target='_blank'>$1</a>")
          .replace(SIMPLE_LINK_REGEX, " <a href='$1' target='_blank'>$1</a>");
      });
      const ulLines = formattedLines.map((l, index) => {
        if (l.includes("<ul>")) {
          const next = formattedLines
            .slice(index, formattedLines.length)
            .findIndex(e => e.includes("</ul>"));
          const result = formattedLines.slice(index, index + next + 1).join("");
          return result;
        } else if (l.includes("<ol>")) {
          const next = formattedLines
            .slice(index, formattedLines.length)
            .findIndex(e => e.includes("</ol>"));
          const result = formattedLines.slice(index, index + next + 1).join("");
          return result;
        } else if (l.includes("<li>") && !l.includes("<ul>")) {
          return null;
        } else {
          return l;
        }
      });
      setText(ulLines);
    } else {
      setText(markdown.split(NEWLINE_REGEX));
    }
  }, [parse, markdown]);

  return (
    <StyledWrapper color={color}>
      {parse && showHtml && text && text.map(l => <div>{l}</div>)}
      {text && text.map(l => <div dangerouslySetInnerHTML={{ __html: l }} />)}
    </StyledWrapper>
  );
};

export default MarkdownParser;

// const LIST_REGEX0 = /(\*|\t\*|\s+\*).?\s/gm;
// const LIST_REGEX1 = /(\*.|\t\*.|\s+\*.).?\s/gm;
// const LIST_REGEX2 = /(\*|\t\*|\s+\*)[\s\S]*?\n\n/gm;
// const LIST_REGEX3 = /\*\s?[a-z].*\n/gm;
// const LIST_REGEX4 = /^\*[^]+?(?=^\*)|^\*[^]+/gm;
// const LIST_REGEX5 = /^\t{0}\*.*/;
// const LIST_REGEX6 = /(\*|\t\*|\s+\*)[\s\S]*?\n\n/gm;
// function getNestedRegexp(level) {
//   return new RegExp("^(?=\\t{" + level + "}\\*).*", "gm");
// }
