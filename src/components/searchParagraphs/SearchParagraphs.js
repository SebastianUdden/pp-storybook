import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: x-large;
  margin: 2rem 2rem 3rem 2rem;
  color: white;
`;

// TODO add highlight of the word that's matched
const SearchParagraphs = ({ paragraphs, searchValue = "" }) => {
  return (
    <>
      {paragraphs
        .filter(p => p.toLowerCase().includes(searchValue.toLowerCase()))
        .map(p => (
          <Paragraph>{p}</Paragraph>
        ))}
    </>
  );
};

export default SearchParagraphs;
