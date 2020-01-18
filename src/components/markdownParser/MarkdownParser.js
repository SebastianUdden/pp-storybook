import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MEDIA_MAX_MEDIUM, MEDIA_MAX_SMALL } from "../../constants/sizes";

const alignText = justifyContent => {
  if (justifyContent === "flex-start") return "left";
  if (justifyContent === "center") return "center";
  if (justifyContent === "flex-end") return "right";
};

const DefaultMarkdownWrapper = styled.div`
  color: ${p => p.color};
  margin: 0;
  padding: 0;

  div {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: ${p => p.justifyContent || "flex-start"};
  }

  p {
    text-align: ${p => alignText(p.justifyContent)};
    margin: 0 0 0.6rem 0;
    width: 100%;
    max-width: 80vw;
    ${MEDIA_MAX_MEDIUM} {
      max-width: 75vw;
    }
    ${MEDIA_MAX_SMALL} {
      max-width: 90vw;
    }
  }

  hr {
    background: ${p => p.color};
    width: 100%;
  }

  strong {
    font-weight: 800;
    color: #555555;
  }

  em {
    color: #999999;
  }

  strong em {
    font-style: normal;
    color: orange;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  ol li,
  ul li {
    margin: 0.3rem 0;
  }

  ul,
  ol {
    margin: 0 0 0 1.4rem;
  }

  ul li {
    list-style: square;
  }

  a {
    text-decoration: none;
    color: ${p => p.primaryColor};
    font-weight: 600;
    :hover {
      border-bottom: 2px solid ${p => p.primaryColor};
    }
  }

  code {
    padding: 0.3rem 0.3rem;
    color: #000000;
    background-color: #999999;
  }

  pre {
    width: 90%;
    padding: 0.5rem;
    background-color: #999999;
  }

  blockquote {
    background-color: inherit;
    opacity: 0.8;
    margin: 0;
    padding: 0.5rem 1rem;
    border-left: 0.3rem solid #ffffff66;
  }

  blockquote p {
    display: inline;
  }

  img {
    margin: ${p => p.justifyContent || "center"};
  }
`;

const AMP_REGEX = /&/g;
const LT_REGEX = /</g;
const GT_REGEX = />/g;
const LSQB_REGEX = /((?:<code>|\`).*)(\[)(.*(?:<\/code>|\`))/g;
const RSQB_REGEX = /((?:<code>|\`).*)(\])(.*(?:<\/code>|\`))/g;
const LPAR_REGEX = /((?:<code>|\`).*)(\()(.*(?:<\/code>|\`))/g;
const RPAR_REGEX = /((?:<code>|\`).*)(\))(.*(?:<\/code>|\`))/g;
const EXCL_REGEX = /((?:<code>|\`).*)(\!)(.*(?:<\/code>|\`))/g;
const DASH_REGEX = /((?:<code>|\`).*)(\-)(.*(?:<\/code>|\`))/g;
const AST2_REGEX = /((?:<code>|\`).*)(\*\*)(.*(?:<\/code>|\`))/g;
const AST1_REGEX = /((?:<code>|\`).*)(\*)(.*(?:<\/code>|\`))/g;
const TILDE_REGEX = /((?:<code>|\`).*)(\~)(.*(?:<\/code>|\`))/g;
const LOWBAR_REGEX = /((?:<code>|\`).*)(\_\_)(.*(?:<\/code>|\`))/g;
const NEWLINE_REGEX = /[\n|\r]/g;
const PRE_CODE_REGEX = /\`\`\`([^\\`]*)\`\`\`/g;
const CODE_REGEX = /\`([^\\`]*)\`/g;
const NEW_CODE_REGEX = /(<pre><code>[^\\<]*<\/code><\/pre>)/g;
const STRONG_REGEX = /\*\*(\S(.*?\S)?)\*\*/gm;
const EM_REGEX = /\*(\S(.*?\S)?)\*/gm;
const SCRATCH_REGEX = /\~\~(\S(.*?\S)?)\~\~/gm;
const UNDERSCORE_REGEX = /\_\_(\S(.*?\S)?)\_\_/gm;
const HEADER6_REGEX = /######.(.*)/g;
const HEADER5_REGEX = /#####.(.*)/g;
const HEADER4_REGEX = /####.(.*)/g;
const HEADER3_REGEX = /###.(.*)/g;
const HEADER2_REGEX = /##.(.*)/g;
const HEADER1_REGEX = /#.(.*)/g;
const QUOTE_REGEX = /(?:^|\n)[ \t]*(?:&gt)(?:[ \t]\[(info|tip|success|warning|warn|error|danger)\])?([ \t]*\S(?:(?!\n(\s*\n)+[^&gt\s])[\s\S])*)/gm;
const UNORDERED_LIST_REGEX = /^-\s(.*)/g;
const ORDERED_LIST_REGEX = /^\d\.\s(.*)/g;
const HORIZONTAL_LINE_REGEX = /([-|_]{3,})/g;
const IMAGE_REGEX = /!\[(.*)\]\((https?:\/\/[^\s]*)(?:\s"(.*)")?\)(?:{(?:width: )?(\d*(?:px|rem|vw|%))})?/g;
const LINK_REGEX = /\[(.*)\]\((https?:\/\/.*)\)/g;
const SIMPLE_LINK_REGEX = /\s(https?:\/\/[^\s]*)/g;

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
    const isPrevLi = regexp.test(list[i - 1]);
    if (isPrevLi) {
      return "last";
    } else {
      return "both";
    }
  } else {
    return undefined;
  }
};
const getUl = (list, l, i) => getL(list, l, i, UNORDERED_LIST_REGEX);
const getOl = (list, l, i) => getL(list, l, i, ORDERED_LIST_REGEX);

const getNewLine = (l, highlight) => {
  if (highlight) {
    // \\"|"(?:\\"|[^"])*"|(\+) TODO: add this type of regex for results within .HERE.
    if (l) {
      const parts = l.split(new RegExp(`(${highlight})`, "gi"));

      return parts
        .map((p, i) => {
          if (
            p.toLowerCase() !== highlight.toLowerCase() ||
            (i !== 0 &&
              (parts[i - 1].endsWith("/") || parts[i - 1].endsWith(".")))
          ) {
            return p;
          } else {
            return `<strong><em>${p}</em></strong>`;
          }
        })
        .join("");
    } else {
      return [];
    }
  }
  return l;
};

const MarkdownParser = ({
  color = "#ffffff",
  primaryColor = "#7D47DF",
  markdown = { meta: {}, body: "" },
  parse = true,
  StyledWrapper = DefaultMarkdownWrapper,
  showHtml = false,
  highlight
}) => {
  if (!markdown.body) return null;
  const [text, setText] = useState(
    markdown.body && markdown.body.split(NEWLINE_REGEX)
  );

  useEffect(() => {
    if (parse) {
      const noHtml = markdown.body
        .replace(AMP_REGEX, "&amp;")
        .replace(LT_REGEX, "&lt;")
        .replace(GT_REGEX, "&gt")
        .replace(PRE_CODE_REGEX, "<pre><code>$1</code></pre>")
        .replace(CODE_REGEX, match =>
          match
            .replace(HEADER6_REGEX, "&num;&num;&num;&num;&num;&num; $1")
            .replace(HEADER5_REGEX, "&num;&num;&num;&num;&num; $1")
            .replace(HEADER4_REGEX, "&num;&num;&num;&num; $1")
            .replace(HEADER3_REGEX, "&num;&num;&num; $1")
            .replace(HEADER2_REGEX, "&num;&num; $1")
            .replace(HEADER1_REGEX, "&num; $1")
            .replace(LSQB_REGEX, "$1&lsqb;$3")
            .replace(RSQB_REGEX, "$1&rsqb;$3")
            .replace(LPAR_REGEX, "$1&lpar;$3")
            .replace(RPAR_REGEX, "$1&rpar;$3")
            .replace(EXCL_REGEX, "$1&excl;$3")
            .replace(DASH_REGEX, "$1&dash;$3")
            .replace(AST2_REGEX, "$1&ast;&ast;$3")
            .replace(AST1_REGEX, "$1&ast;$3")
            .replace(TILDE_REGEX, "$1&Tilde;$3")
            .replace(LOWBAR_REGEX, "$1&lowbar;$3")
        );
      const splitCode = noHtml.split(NEW_CODE_REGEX);
      const newLines = splitCode
        .map(s => (s.startsWith("<") ? s : s.split(NEWLINE_REGEX)))
        .flat();

      const formattedLines = newLines
        .map((l, index) => {
          const ul = getUl(newLines, l, index);
          const ol = getOl(newLines, l, index);
          const list = l
            .replace(HORIZONTAL_LINE_REGEX, "<hr></hr>")
            .replace(
              UNORDERED_LIST_REGEX,
              `${ul === "first" || ul === "both" ? "<ul>" : ""}<li>$1</li>${
                ul === "last" || ul === "both" ? "</ul>" : ""
              }`
            )
            .replace(
              ORDERED_LIST_REGEX,
              `${ol === "first" || ol === "both" ? "<ol>" : ""}<li>$1</li>${
                ol === "last" || ol === "both" ? "</ol>" : ""
              }`
            );
          return list
            .replace(HEADER6_REGEX, "<h6>$1</h6>")
            .replace(HEADER5_REGEX, "<h5>$1</h5>")
            .replace(HEADER4_REGEX, "<h4>$1</h4>")
            .replace(HEADER3_REGEX, "<h3>$1</h3>")
            .replace(HEADER2_REGEX, "<h2>$1</h2>")
            .replace(HEADER1_REGEX, "<h1>$1</h1>")
            .replace(QUOTE_REGEX, `<blockquote class='$1'>$2</blockquote>`)
            .replace(
              UNORDERED_LIST_REGEX,
              `${ul === "first" || ul === "both" ? "<ul>" : ""}<li>$1</li>${
                ul === "last" || ul === "both" ? "</ul>" : ""
              }`
            )
            .replace(
              ORDERED_LIST_REGEX,
              `${ol === "first" || ol === "both" ? "<ol>" : ""}<li>$1</li>${
                ol === "last" || ol === "both" ? "</ol>" : ""
              }`
            );
        })
        .map(l => {
          if (l.startsWith("<")) {
            return l;
          }
          return `<p>${l}</p>`;
        })
        .map(l =>
          l
            .replace(CODE_REGEX, `<code>$1</code>`)
            .replace(
              IMAGE_REGEX,
              "<img src='$2' alt='$1' title='$3' width='$4' />"
            )
            .replace(LINK_REGEX, "<a href='$2' target='_blank'>$1</a>")
            .replace(SIMPLE_LINK_REGEX, " <a href='$1' target='_blank'>$1</a>")
            .replace(STRONG_REGEX, `<strong>$1</strong>`)
            .replace(EM_REGEX, `<em>$1</em>`)
            .replace(SCRATCH_REGEX, `<strike>$1</strike>`)
            .replace(UNDERSCORE_REGEX, `<u>$1</u>`)
        );
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
      setText(markdown.body.split(NEWLINE_REGEX));
    }
  }, [parse, markdown]);

  return (
    <StyledWrapper
      color={color}
      primaryColor={primaryColor}
      justifyContent={markdown.meta && markdown.meta.justifyContent}
    >
      {parse &&
        showHtml &&
        text &&
        text.map((l, index) => (
          <div>
            {!text[index - 1] && <br></br>}
            {l}
          </div>
        ))}
      {text &&
        text.map((l, index) => {
          return (
            <>
              {!text[index - 1] && l !== null && <br></br>}
              {l && (
                <div
                  key={l + Math.random()}
                  dangerouslySetInnerHTML={{ __html: getNewLine(l, highlight) }}
                />
              )}
            </>
          );
        })}
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
