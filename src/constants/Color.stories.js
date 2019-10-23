import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import SearchParagraphs from "../components/searchParagraphs/SearchParagraphs";
import { MOCK_PARAGRAPHS } from "./mocks";
import ColoredBox from "../components/coloredBox/ColoredBox";
import { THEME_COLORS, ALTERNATE_THEME_COLORS, MAIN_THEME, DP6 } from "./theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const Label = styled.label`
  margin-top: 0.5rem;
  text-align: center;
  color: ${p => p.color};
  opacity: ${p => p.opacity};
`;

const BigLabel = styled(Label)`
  font-size: xx-large;
`;

const SmallLabel = styled(Label)`
  max-width: 8rem;
  font-size: large;
`;

storiesOf("Color", module)
  .add("main - all colors", () => (
    <Container>
      {Object.keys(MAIN_THEME).map(theme => (
        <Wrapper>
          <ColoredBox
            backgroundColor={MAIN_THEME[theme].color.background}
            boxShadow={DP6}
          />
          <Label color="#cccccc">{theme.replace("_", " ").toLowerCase()}</Label>
        </Wrapper>
      ))}
    </Container>
  ))
  .add("main - color on background color", () => (
    <>
      <Container>
        {Object.keys(MAIN_THEME)
          .filter((a, index) => index < 6)
          .map((theme, index) => (
            <Wrapper>
              <ColoredBox
                backgroundColor={MAIN_THEME[theme].color.background}
                boxShadow={DP6}
              >
                <BigLabel
                  color={MAIN_THEME[theme].color.foreground}
                  opacity={MAIN_THEME[theme].opacity.large}
                >
                  Big Label
                </BigLabel>
              </ColoredBox>
              <Label color="#cccccc">
                {theme.replace("_", " ").toLowerCase()}
              </Label>
            </Wrapper>
          ))}
      </Container>
      <Container>
        {Object.keys(MAIN_THEME)
          .filter((a, index) => index < 6)
          .map((theme, index) => (
            <Wrapper>
              <ColoredBox
                backgroundColor={MAIN_THEME[theme].color.background}
                boxShadow={DP6}
              >
                <SmallLabel
                  color={MAIN_THEME[theme].color.foreground}
                  opacity={MAIN_THEME[theme].opacity.normal}
                >
                  This is a label and description
                </SmallLabel>
              </ColoredBox>
              <Label color="#cccccc">
                {theme.replace("_", " ").toLowerCase()}
              </Label>
            </Wrapper>
          ))}
      </Container>
    </>
  ))
  .add("all default colors", () => (
    <Container>
      {Object.keys(THEME_COLORS).map(color => (
        <Wrapper>
          <ColoredBox backgroundColor={THEME_COLORS[color]} boxShadow={DP6} />
          <Label color="#cccccc">{color.replace("_", " ").toLowerCase()}</Label>
        </Wrapper>
      ))}
    </Container>
  ))
  .add("all alternate colors", () => (
    <Container>
      {Object.keys(ALTERNATE_THEME_COLORS).map(color => (
        <Wrapper>
          <ColoredBox
            backgroundColor={ALTERNATE_THEME_COLORS[color]}
            boxShadow={DP6}
          />
          <Label color="#cccccc">{color.replace("_", " ").toLowerCase()}</Label>
        </Wrapper>
      ))}
    </Container>
  ))
  .add("paragraph", () => <SearchParagraphs paragraphs={MOCK_PARAGRAPHS} />);
