import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MAIN_THEME, DP_TYPES, HIGH_EMPHASIS } from "../../constants/theme";
import Text from "../text/Text";
import { DEFAULT_FONT } from "../../constants/font";
import { countLines } from "../../utils/textParsers";

const Wrapper = styled.div`
  background-color: ${p => p.backgroundColor};
  color: ${p => p.foregroundColor};
  box-shadow: ${p => p.boxShadow};
  width: ${p => p.size.width};
  height: ${p => p.size.height};
  :active {
    cursor: pointer;
    box-shadow: ${p => p.boxShadowRaised};
  }
  margin: 0.5rem;
`;

const LowerContainer = styled.div`
  padding: 1rem 0;
`;

const TitleContainer = styled.div`
  padding: 0 1rem;
`;
const InfoContainer = styled.div`
  padding: 0 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  padding: 0.4rem 0.4rem 0;
`;
const IconContainer = styled.div`
  padding: 0.4rem 0.4rem 0;
`;

const Title = styled.h2`
  margin: 0 0 0.2rem 0;
`;
const SecondaryText = styled.p`
  margin: 0;
`;
const SupportingText = styled.p`
  margin: 1rem 0 0 0;
`;

const Img = styled.img``;

const Input = styled.input`
  background-color: transparent;
  font-family: ${DEFAULT_FONT.family};
  outline: none;
  margin: -0.3rem 0 -0.35rem -0.5rem;
  border: 1px solid #cccccc;
  padding: 0.25rem 0.45rem;
  width: 98%;
`;
const TitleInput = styled(Input)`
  font-size: 1.5rem;
  font-weight: 800;
`;
const SecondaryTextInput = styled(Input)`
  font-size: 1rem;
`;
const SupportingTextInput = styled.textarea`
  font-family: ${DEFAULT_FONT.family};
  width: 98%;
  font-size: 1rem;
  margin: -0.5rem 0 0 -0.45rem;
  padding: 0.4rem 0.4rem;
  background-color: transparent;
  outline: none;
  color: #777777;
  border: 1px solid #cccccc;
  resize: vertical;
  line-height: 1.4em;
`;

const Card = ({
  title: initialTitle,
  secondaryText: initialSecondaryText,
  supportingText: initialSupportingText,
  image: initialImage,
  backgroundColor = MAIN_THEME.WHITE.color.background,
  foregroundColor = MAIN_THEME.WHITE.color.foreground,
  boxShadow = DP_TYPES.DP6,
  boxShadowRaised = DP_TYPES.DPraised,
  size = {
    width: "320px"
  },
  buttons,
  icons,
  onUpdate
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [secondaryText, setSecondaryText] = useState(initialSecondaryText);
  const [supportingText, setSupportingText] = useState(initialSupportingText);
  const [image, setImage] = useState(initialImage);

  const [showEdit, setShowEdit] = useState(undefined);

  useEffect(() => {
    if (!showEdit) return;
    if (typeof window === "undefined") return null;
    setTimeout(() => {
      document.getElementById(showEdit).select();
    }, 100);
  }, [showEdit]);

  useEffect(() => {
    if (
      title !== initialTitle ||
      secondaryText !== initialSecondaryText ||
      supportingText !== initialSupportingText ||
      image !== initialImage
    ) {
      onUpdate({
        title,
        secondaryText,
        supportingText,
        image
      });
    }
  }, [title, secondaryText, supportingText, image]);

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      boxShadow={boxShadow}
      boxShadowRaised={boxShadowRaised}
      size={size}
      draggable={true}
      onClick={() => setShowEdit(undefined)}
    >
      {image && (
        <Img
          {...image}
          width={image.width || 320}
          height={image.height || 220}
        />
      )}
      <LowerContainer>
        <TitleContainer>
          <Title
            onClick={e => {
              e.stopPropagation();
              setShowEdit("title");
            }}
          >
            {showEdit === "title" ? (
              <TitleInput
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            ) : (
              <Text foregroundColor={foregroundColor} emphasis={HIGH_EMPHASIS}>
                {title}
              </Text>
            )}
          </Title>
          {secondaryText && (
            <SecondaryText
              onClick={e => {
                e.stopPropagation();
                setShowEdit("secondaryText");
              }}
            >
              {showEdit === "secondaryText" ? (
                <SecondaryTextInput
                  id="secondaryText"
                  value={secondaryText}
                  onChange={e => setSecondaryText(e.target.value)}
                />
              ) : (
                <Text>{secondaryText}</Text>
              )}
            </SecondaryText>
          )}
        </TitleContainer>
        <InfoContainer>
          {supportingText && (
            <SupportingText
              onClick={e => {
                e.stopPropagation();
                setShowEdit("supportingText");
              }}
            >
              {showEdit === "supportingText" ? (
                <SupportingTextInput
                  id="supportingText"
                  value={supportingText}
                  onChange={e => setSupportingText(e.target.value)}
                  rows={countLines("supportingTextElement")}
                />
              ) : (
                <Text id="supportingTextElement">{supportingText}</Text>
              )}
            </SupportingText>
          )}
        </InfoContainer>
        {(buttons || icons) && (
          <FlexWrapper>
            {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
            {icons && <IconContainer>{icons}</IconContainer>}
          </FlexWrapper>
        )}
      </LowerContainer>
    </Wrapper>
  );
};

export default Card;
