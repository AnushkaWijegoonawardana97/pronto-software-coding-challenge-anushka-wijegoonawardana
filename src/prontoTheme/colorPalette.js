import { alpha } from "@mui/material";

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  main: "#120A27",
};

const SECONDARY = {
  main: "#251548",
};

const INFO = {
  main: "#1890FF",
};

const SUCCESS = {
  main: "#54D62C",
};

const WARNING = {
  main: "#FFC107",
};

const ERROR = {
  main: "#FF4842",
};

const colorPalette = {
  common: { black: "#FDFAFE", white: "#FFFFFF" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#FDFAFE",
    default: GREY[100],
    neutral: "#E0DCEA",
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default colorPalette;
