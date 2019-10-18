import React from "react";
export const dragHandle = {
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <path id="a" d="M0 0h24v24H0V0z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path clip-path="url(#b)" d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </>
  )
};
