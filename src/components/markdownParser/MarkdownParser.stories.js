import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

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
  This is some markdown that I'm https://www.google.com displaying, it contains both **bold**, *italic*, ~~scratched~~, \`code\` 
  ___
  ## Quotes
  > This is a quote
  > It's a pretty neat way to display information
  ## Lists
  #### Unordered
  * first
  * second [google link](https://www.google.com)
  * third
  #### Ordered
  1. First
  1. Second
  1. Third
  1. Second
  1. Third
  ## The other markdown\n
  ---
  There is also additional markdown like 
  * links 
  [google link](https://www.google.com)
  https://www.google.com
  * images
  ![images](https://cdn.getyourguide.com/img/tour_img-1139999-148.jpg "Alternate text")
  ----------
`;

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

const MarkdownWrapper = styled.div`
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

storiesOf("Markdown parser", module)
  .add("default", () => {
    const [parse, setParse] = useState(false);
    const [showHtml, setShowHtml] = useState(false);
    const [markdown, setMarkdown] = useState(MARKDOWN_TEST);
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
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          <MarkdownParser
            color="white"
            markdown={markdown}
            parse={parse}
            showHtml={showHtml}
          />
        </FlexWrapper>
      </div>
    );
  })
  .add("restyled", () => {
    const [parse, setParse] = useState(false);
    const [showHtml, setShowHtml] = useState(false);
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
        <MarkdownParser
          color="white"
          markdown={MARKDOWN_TEST}
          parse={parse}
          StyledWrapper={MarkdownWrapper}
          showHtml={showHtml}
        />
      </div>
    );
  });