import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import SearchSections from "../searchSections/SearchSections";
import { MOCK_SECTIONS } from "../../constants/mocks";
import ColoredBox from "../coloredBox/ColoredBox";
import { ALTERNATE_THEME_COLORS, MAIN_THEME, DP6 } from "../../constants/theme";

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
  .add("paragraph", () => <SearchSections sections={MOCK_SECTIONS} />);
