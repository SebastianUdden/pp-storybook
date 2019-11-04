import React, { useState } from "react"; // Import full React framework
import Stars from "../components/stars/Stars";

export const actions = {};
export const size = {
  width: 24,
  height: 24
};

export const RATINGS_DB = {
  tables: {
    firstnorth: {
      headings: [
        "Företagsnamn",
        "Betyg (Sebbe)",
        "Betyg (Mattis)",
        "Betyg (Tim)"
      ],
      data: {
        rows: [
          {
            cells: [
              "Företag 1",
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />
            ]
          },
          {
            cells: [
              "Företag 2",
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />
            ]
          },
          {
            cells: [
              "Företag 3",
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />,
              <Stars
                percentage={60}
                size={size}
                {...actions}
                color="orange"
                backgroundColor="grey"
              />
            ]
          }
        ]
      }
    }
  }
};
