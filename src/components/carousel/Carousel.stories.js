import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Carousel from "./Carousel";
import Card from "../card/Card";

const Wrapper = styled.div`
  width: 50vw;
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
        slides={[<Item>First</Item>, <Item>Second</Item>, <Item>Third</Item>]}
      />
    </Wrapper>
  ))
  .add("single card", () => (
    <Wrapper>
      <Carousel
        slides={[<Card title="Card title" secondaryText="Secondary text" />]}
      />
    </Wrapper>
  ))
  .add("ten card", () => (
    <Wrapper>
      <Carousel
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
  ));
