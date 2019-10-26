import React from "react";
import styled from "styled-components";
import HighlightedText from "../highlightedText/HighlightedText";
import { DEFAULT_FONT } from "../../constants/font";

const Sections = styled.div`
  margin: 0;
`;
const Section = styled.div``;
const Title = styled.h2`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  margin: 2rem;
  color: white;
`;
const Paragraph = styled.p`
  font-family: ${DEFAULT_FONT.family};
  font-size: ${DEFAULT_FONT.size};
  margin: 2rem;
  color: white;
`;

const SearchSections = React.memo(
  ({
    sections = [],
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
                  <Section key={section.id}>
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
                  section.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map(section => (
                <Section key={section.id}>
                  <Title>
                    <HighlightedText
                      text={section.title}
                      highlight={searchValue}
                      foregroundColor={foregroundColor}
                      backgroundColor={backgroundColor}
                    />
                  </Title>
                  <Paragraph>
                    <HighlightedText
                      text={section.paragraph}
                      highlight={searchValue}
                      foregroundColor={foregroundColor}
                      backgroundColor={backgroundColor}
                    />
                  </Paragraph>
                </Section>
              ))}
      </Sections>
    );
  }
);

export default SearchSections;
