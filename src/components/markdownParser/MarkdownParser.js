import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: ${p => p.color};
  padding: 2rem;

  strong {
    font-weight: 800;
    color: orange;
  }

  em {
    color: #999999;
  }

  li {
    color: orange;
  }
`;

const STRONG_REGEX = /\*\*(\S(.*?\S)?)\*\*/gm;
const EM_REGEX = /\*(\S(.*?\S)?)\*/gm;
const HEADER6_REGEX = /######.([\w|\s]*)/g;
const HEADER5_REGEX = /#####.([\w|\s]*)/g;
const HEADER4_REGEX = /####.([\w|\s]*)/g;
const HEADER3_REGEX = /###.([\w|\s]*)/g;
const HEADER2_REGEX = /##.([\w|\s]*)/g;
const HEADER1_REGEX = /#.([\w|\s]*)/g;
const NEWLINE_REGEX = /[\n\r]/g;
const LIST_REGEX = /\*.([\w|\s]*)/g;
const HORIZONTAL_LINE_REGEX = /(-{3,})/g;
const LINK_REGEX = /\[([\w|\s]*)\]\((https:\/\/.*)\)/g;

const MarkdownParser = ({ color, markdown }) => {
  const strong = markdown.replace(STRONG_REGEX, `<strong>$1</strong>`);
  const em = strong.replace(EM_REGEX, `<em>$1</em>`);

  const newLines = em.split(NEWLINE_REGEX);
  const formattedLines = newLines.map(l => {
    return l
      .replace(HEADER6_REGEX, "<h6>$1</h6>")
      .replace(HEADER5_REGEX, "<h5>$1</h5>")
      .replace(HEADER4_REGEX, "<h4>$1</h4>")
      .replace(HEADER3_REGEX, "<h3>$1</h3>")
      .replace(HEADER2_REGEX, "<h2>$1</h2>")
      .replace(HEADER1_REGEX, "<h1>$1</h1>")
      .replace(LIST_REGEX, "<li>$1</li>")
      .replace(HORIZONTAL_LINE_REGEX, "<hr>")
      .replace(LINK_REGEX, "<a href='$2' target='_blank'>$1</a>");
  });
  return (
    <Wrapper color={color}>
      {formattedLines &&
        formattedLines.map(l => (
          <div dangerouslySetInnerHTML={{ __html: l }} />
        ))}
    </Wrapper>
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
