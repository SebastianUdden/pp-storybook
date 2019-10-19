import React from "react";
export const shortText = {
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <path id="a" d="M0 0h24v24H0V0z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path d="M4 9h16v2H4zm0 4h10v2H4z" clip-path="url(#b)" />
    </>
  )
};
