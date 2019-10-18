import React from "react";
export const compareArrows = {
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M0 0h24v24H0z" fill="none" />
      <defs>
        <path id="a" d="M0 0h24v24H0V0z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path
        clip-path="url(#b)"
        d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"
      />
    </>
  )
};
