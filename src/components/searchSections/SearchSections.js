import React from "react";
import styled from "styled-components";

const Sections = styled.div`
  margin: 0;
`;
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

const getHighlightedText = (
  text,
  higlight,
  foregroundColor,
  backgroundColor
) => {
  // Split on higlight term and include term into parts, ignore case
  let parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return (
    <span>
      {" "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === higlight.toLowerCase()
              ? { color: foregroundColor, backgroundColor }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
};

const SearchSections = ({
  sections,
  searchValue = "",
  selectedSection = "",
  foregroundColor = "orange",
  backgroundColor = "transparent"
}) => {
  return (
    <Sections>
      {selectedSection
        ? sections
            .filter(
              section =>
                section.title.toLowerCase() === selectedSection.toLowerCase()
            )
            .map(section => {
              return (
                <Section>
                  <Title>{section.title}</Title>
                  <Paragraph>{section.paragraph}</Paragraph>
                </Section>
              );
            })
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
                <Paragraph>
                  {getHighlightedText(
                    section.paragraph,
                    searchValue,
                    foregroundColor,
                    backgroundColor
                  )}
                </Paragraph>
              </Section>
            ))}
    </Sections>
  );
};

export default SearchSections;
