import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

const TextPart = styled(Text)`
  color: ${p => (p.highlight ? p.foregroundColor : "inherit")};
  background-color: ${p => (p.highlight ? p.backgroundColor : "inherit")};
`;

const HighlightedText = ({
  text = "",
  highlight = "",
  foregroundColor = "orange",
  backgroundColor = "transparent"
}) => {
  // Split on higlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {" "}
      {parts.map((part, i) => (
        <TextPart
          key={i}
          highlight={part.toLowerCase() === highlight.toLowerCase()}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
        >
          {part}
        </TextPart>
      ))}{" "}
    </span>
  );
};

export default HighlightedText;
