import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import MarkdownParser from "./MarkdownParser";

const MARKDOWN_TEST = `
  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
  This is some markdown that I'm displaying, it contains both **bold**, *italic* and lists
  * first
  \t* second\n
  \t* third\n
  * elem 1
    * elem 2
	* child 1
	* child 2
		* child 1
      * elem 3
  * child 1 
  ## The other markdown\n
  ---
  There is also additional markdown like [links](https://www.google.com) 
  ----------
`;

const StyleMarkdown = styled.div`
  div {
    strong {
      font-weight: 800;
      color: #555555;
    }

    em {
      color: #999999;
    }

    li {
      padding: 0.1rem;
      list-style: square;
    }

    a {
      text-decoration: none;
      color: orange;
      font-weight: 600;
    }
  }
`;

storiesOf("Markdown parser", module).add("default", () => (
  <StyleMarkdown>
    <MarkdownParser color="white" markdown={MARKDOWN_TEST} />
  </StyleMarkdown>
));
