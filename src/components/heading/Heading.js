import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  border-bottom: 2px solid ${p => p.color};
  margin: 1rem 0 0rem;
`;
const H2 = styled.h2`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 1rem 0 0rem;
`;
const H3 = styled.h3`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 1rem 0 0rem;
`;
const H4 = styled.h4`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 1rem 0 0rem;
`;
const H5 = styled.h5`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 1rem 0 0rem;
`;
const H6 = styled.h6`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 0.5rem 0 0;
`;
const P = styled.p`
  border-bottom: 1px solid ${p => p.color};
  padding: 0 0 0.3rem 0;
  margin: 0;
`;
const Heading = ({
  level,
  children,
  primaryColor = "orange",
  secondaryColor = "#888888"
}) => {
  switch (level) {
    case 1:
      return <H1 color={primaryColor}>{children}</H1>;
    case 2:
      return <H2 color={primaryColor}>{children}</H2>;
      break;
    case 3:
      return <H3 color={secondaryColor}>{children}</H3>;
      break;
    case 4:
      return <H4 color={secondaryColor}>{children}</H4>;
      break;
    case 5:
      return <H5 color={secondaryColor}>{children}</H5>;
      break;
    case 6:
      return <H6 color={secondaryColor}>{children}</H6>;
      break;
    default:
      return <P color={secondaryColor}>{children}</P>;
  }
};

export default Heading;
