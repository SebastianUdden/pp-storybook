import React, { useState } from "react";
import styled from "styled-components";
import Star from "../star/Star";

const GridOverlay = styled.div`
  display: grid;
`;
const StarWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const Stars = ({
  amount = 5,
  percentage: defaultPercentage,
  size,
  color,
  backgroundColor,
  fixedAmount
}) => {
  const unitPercentage = 100 / amount;
  const [percentage, setPercentage] = useState(defaultPercentage);
  const wholeStarsCount = Math.floor(percentage / unitPercentage);
  const remainderRatio = (percentage % unitPercentage) / unitPercentage;
  const stars = Array(wholeStarsCount).fill({});
  const starsBackground = Array(amount).fill({});

  return (
    <GridOverlay>
      <StarWrapper>
        {starsBackground.map((star, index) => (
          <Star
            id={`starbackground-${index}`}
            key={`starbackground-${index}`}
            remainderRatio={1}
            {...size}
            color={backgroundColor}
            onClick={() =>
              fixedAmount ? {} : setPercentage((index + 1) * unitPercentage)
            }
            fixedAmount={fixedAmount}
          />
        ))}
      </StarWrapper>
      <StarWrapper>
        {stars.map((star, index) => (
          <Star
            id={`star-${index}`}
            key={`star-${index}`}
            remainderRatio={1}
            {...size}
            color={color}
            onClick={() =>
              fixedAmount ? {} : setPercentage((index + 1) * unitPercentage)
            }
            fixedAmount={fixedAmount}
          />
        ))}
        {remainderRatio ? (
          <Star
            id={`extrastar-1`}
            remainderRatio={remainderRatio}
            {...size}
            color={color}
            onClick={() =>
              fixedAmount ? {} : setPercentage((index + 1) * unitPercentage)
            }
            fixedAmount={fixedAmount}
          />
        ) : null}
      </StarWrapper>
    </GridOverlay>
  );
};

export default Stars;
