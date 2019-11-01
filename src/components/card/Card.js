import React from "react";
import styled from "styled-components";
import { MAIN_THEME, DP_TYPES, HIGH_EMPHASIS } from "../../constants/theme";
import Text from "../text/Text";

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

const Card = ({
  title,
  secondaryText,
  supportingText,
  backgroundColor = MAIN_THEME.WHITE.color.background,
  foregroundColor = MAIN_THEME.WHITE.color.foreground,
  boxShadow = DP_TYPES.DP6,
  boxShadowRaised = DP_TYPES.DPraised,
  image,
  size = {
    width: "320px"
  },
  buttons,
  icons
}) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      boxShadow={boxShadow}
      boxShadowRaised={boxShadowRaised}
      size={size}
      draggable={true}
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
          <Title>
            <Text foregroundColor={foregroundColor} emphasis={HIGH_EMPHASIS}>
              {title}
            </Text>
          </Title>
          {secondaryText && (
            <SecondaryText>
              <Text>{secondaryText}</Text>
            </SecondaryText>
          )}
        </TitleContainer>
        <InfoContainer>
          {supportingText && (
            <SupportingText>
              <Text>{supportingText}</Text>
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
