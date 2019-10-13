import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);

// Option defaults.
addParameters({
  options: {
    theme: themes.dark
  }
});
