import styled from "styled-components";

export const Wrapper = styled.div`
  height: 10vh;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 2rem;
`;
export const FlexColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
`;
export const Span = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;

export const getMinX = values =>
  Math.min.apply(
    null,
    values.map(obj => obj.x)
  );
export const getMaxX = values =>
  Math.max.apply(
    null,
    values.map(obj => obj.x)
  );
export const getMinY = values =>
  Math.min.apply(
    null,
    values.map(obj => obj.y)
  );
export const getMaxY = values =>
  Math.max.apply(
    null,
    values.map(obj => obj.y)
  );

export const getSvgX = (values, x, width, offset = 0) => {
  const baseWidth = width - offset * 2;
  return (x / getMaxX(values)) * baseWidth + offset;
};
export const getSvgY = (values, y, height, offset = 0) => {
  const baseHeight = height - offset * 2;
  return baseHeight - (y / getMaxY(values)) * baseHeight + offset;
};

export const makePath = ({
  values,
  width,
  height,
  offsetWidth = 10,
  offsetHeight = 5
}) => {
  let pathD = ` M  ${getSvgX(
    values,
    values[0].x,
    width,
    offsetWidth
  )} ${getSvgY(values, values[0].y, height, offsetHeight)} `;
  pathD += values.map((point, i) => {
    return `L ${getSvgX(values, point.x, width, offsetWidth)} ${getSvgY(
      values,
      point.y,
      height,
      offsetHeight
    )}  `;
  });

  return pathD;
};

// export const makeAxis = (values, width, height) => {
//   const minX = getMinX(values);
//   const maxX = getMaxX(values);
//   const minY = getMinY(values);
//   const maxY = getMaxY(values);
//   return (
//     <>
//       <line
//         x1={getSvgX(values, minX, width)}
//         y1={getSvgY(values, minY, height)}
//         x2={getSvgX(values, maxX, width)}
//         y2={getSvgY(values, minY, height)}
//       />
//       <line
//         x1={getSvgX(values, minX, width)}
//         y1={getSvgY(values, minY, height)}
//         x2={getSvgX(values, minX, width)}
//         y2={getSvgY(values, maxY, height)}
//       />
//     </>
//   );
// };
