import addons from "@storybook/addons";
import { FORCE_RE_RENDER } from "@storybook/core-events";
import { themes } from "@storybook/theming";

// Automatically switch light/dark theme based on system pref.
addons.register("auto-theme-switcher", api => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  let lastTheme;

  // Check every second. This keeps everything in sync and works reliably
  // on Chrome which doesn't seem to support change events on this media query.
  setInterval(() => {
    const desiredTheme = prefersDark.matches ? "dark" : "normal";

    if (lastTheme !== desiredTheme) {
      lastTheme = desiredTheme;
      api.setOptions({ theme: themes[desiredTheme] });
      addons.getChannel().emit(FORCE_RE_RENDER);
    }
  }, 1000);
});
