import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Carousel from "./Carousel";
import Card from "../card/Card";
import ContainedButton from "../button/ContainedButton";
import Text from "../text/Text";
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes";

const Wrapper = styled.div`
  width: 100%;
  ${MEDIA_MIN_MEDIUM} {
    width: 20rem;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const H2 = styled.h2`
  margin-right: 1rem;
`;
const Span = styled.span`
  font-size: x-large;
`;
const Item = styled.div`
  padding: 2rem;
  background-color: white;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid black;
`;
storiesOf("Carousel", module)
  .add("default", () => (
    <Wrapper>
      <Carousel
        interval={null}
        slides={[
          <Item>First slide</Item>,
          <Item>Second slide</Item>,
          <Item>Third slide</Item>
        ]}
      />
    </Wrapper>
  ))
  .add("ten cards", () => {
    const [interval, setInterval] = useState(1000);
    return (
      <Wrapper>
        <InnerWrapper>
          <H2>
            <Text foregroundColor="white">Interval: {interval}</Text>
          </H2>
          <ContainedButton onClick={() => setInterval(interval * 2)}>
            <Span>+</Span>
          </ContainedButton>
          <ContainedButton onClick={() => setInterval(interval / 2)}>
            <Span>-</Span>
          </ContainedButton>
        </InnerWrapper>
        <Carousel
          interval={interval}
          slides={[
            <Card
              title="Card 1"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 2"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 3"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 4"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 5"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 6"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 7"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 8"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 9"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />,
            <Card
              title="Card 10"
              secondaryText="Secondary text"
              image={{
                src:
                  "https://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg",
                alt: "test"
              }}
              margin={0}
            />
          ]}
        />
      </Wrapper>
    );
  })
  .add("single card", () => (
    <Wrapper>
      <Carousel
        slides={[
          <Card
            title="A single card"
            secondaryText="Secondary text"
            margin={0}
          />
        ]}
      />
    </Wrapper>
  ))
  .add("empty carousel", () => (
    <Wrapper>
      <Carousel slides={[]} />
    </Wrapper>
  ));
