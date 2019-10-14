export var TINY = 320;
export var SMALL = 560;
export var MEDIUM = 960;
export var LARGE = 1600;
export var MEDIA_TINY = "@media (max-width: " + TINY + "px)";
export var MEDIA_MAX_SMALL = "@media (max-width: " + SMALL + "px)";
export var MEDIA_SMALL =
  "@media (min-width: " + (TINY + 1) + "px) and (max-width: " + SMALL + "px)";
export var MEDIA_MIN_MEDIUM = "@media (min-width: " + (SMALL + 1) + "px)";
export var MEDIA_MAX_MEDIUM = "@media (max-width: " + MEDIUM + "px)";
export var MEDIA_MEDIUM =
  "@media (min-width: " + (SMALL + 1) + "px) and (max-width: " + MEDIUM + "px)";
export var MEDIA_MIN_LARGE = "@media (min-width: " + (MEDIUM + 1) + "px)";
export var MEDIA_MIN_X_LARGE = "@media (min-width: " + (LARGE + 1) + "px)";
