import React from "react";
export const textFields = {
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <path id="a" d="M24 24H0V0h24v24z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path
        clip-path="url(#b)"
        d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
      />
    </>
  )
};
