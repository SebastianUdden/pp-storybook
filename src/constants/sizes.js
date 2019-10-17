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

export var SMALL_HANDSET = 359;
export var MEDIUM_HANDSET = 399;
export var LARGE_HANDSET = 599;
export var SMALL_TABLET = 719;
export var MEDIUM_TABLET = 839;
export var LARGE_TABLET = 959;
export var SMALL_DESKTOP = 1023;
export var MEDIUM_DESKTOP = 1279;
export var LARGE_DESKTOP = 1439;
export var X_LARGE_DESKTOP = 1599;
export var XX_LARGE_DESKTOP = 1919;

export var MEDIA_SMALL_HANDSET = "@media (max-width: " + SMALL_HANDSET + "px)";
export var MEDIA_MEDIUM_HANDSET =
  "@media (min-width: " +
  (SMALL_HANDSET + 1) +
  "px) and (max-width: " +
  MEDIUM_HANDSET +
  "px)";
export var MEDIA_LARGE_HANDSET =
  "@media (min-width: " +
  (MEDIUM_HANDSET + 1) +
  "px) and (max-width: " +
  LARGE_HANDSET +
  "px)";
export var MEDIA_SMALL_TABLET =
  "@media (min-width: " +
  (LARGE_HANDSET + 1) +
  "px) and (max-width: " +
  SMALL_TABLET +
  "px)";
export var MEDIA_MEDIUM_TABLET =
  "@media (min-width: " +
  (SMALL_TABLET + 1) +
  "px) and (max-width: " +
  MEDIUM_TABLET +
  "px)";
export var MEDIA_LARGE_TABLET =
  "@media (min-width: " +
  (MEDIUM_TABLET + 1) +
  "px) and (max-width: " +
  LARGE_TABLET +
  "px)";
export var MEDIA_SMALL_DESKTOP =
  "@media (min-width: " +
  (LARGE_TABLET + 1) +
  "px) and (max-width: " +
  SMALL_DESKTOP +
  "px)";
export var MEDIA_MEDIUM_DESKTOP =
  "@media (min-width: " +
  (SMALL_DESKTOP + 1) +
  "px) and (max-width: " +
  MEDIUM_DESKTOP +
  "px)";
export var MEDIA_LARGE_DESKTOP =
  "@media (min-width: " +
  (MEDIUM_DESKTOP + 1) +
  "px) and (max-width: " +
  LARGE_DESKTOP +
  "px)";
export var MEDIA_X_LARGE_DESKTOP =
  "@media (min-width: " +
  (LARGE_DESKTOP + 1) +
  "px) and (max-width: " +
  X_LARGE_DESKTOP +
  "px)";
export var MEDIA_XX_LARGE_DESKTOP =
  "@media (min-width: " +
  (X_LARGE_DESKTOP + 1) +
  "px) and (max-width: " +
  XX_LARGE_DESKTOP +
  "px)";
export var MEDIA_TV = "@media (min-width: " + XX_LARGE_DESKTOP + 1 + "px)";
