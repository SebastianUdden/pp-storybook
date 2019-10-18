import React from "react";
export const eventSeat = {
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
        d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"
        clip-path="url(#b)"
      />
    </>
  )
};
