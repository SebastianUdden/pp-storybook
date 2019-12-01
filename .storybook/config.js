import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(js|mdx)$/), module);

// Option defaults.
addParameters({
  options: {
    theme: themes.light
  }
});
