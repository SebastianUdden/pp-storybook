import React from "react";
import styled from "styled-components";

const Section = styled.div``;
const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: x-large;
  margin: 2rem;
  color: white;
`;
const Paragraph = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: x-large;
  margin: 2rem;
  color: white;
`;

// TODO add highlight of the word that's matched
const SearchSections = ({
  sections,
  searchValue = "",
  selectedSection = ""
}) => {
  return (
    <>
      {selectedSection
        ? sections
            .filter(
              section =>
                section.title.toLowerCase() === selectedSection.toLowerCase()
            )
            .map(section => (
              <Section>
                <Title>{section.title}</Title>
                <Paragraph>{section.paragraph}</Paragraph>
              </Section>
            ))
        : sections
            .filter(
              section =>
                section.paragraph
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                section.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map(section => (
              <Section>
                <Title>{section.title}</Title>
                <Paragraph>{section.paragraph}</Paragraph>
              </Section>
            ))}
    </>
  );
};

export default SearchSections;
