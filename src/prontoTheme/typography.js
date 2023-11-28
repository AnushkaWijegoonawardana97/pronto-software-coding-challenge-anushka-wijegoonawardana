/**
 * Converts REM units to pixels.
 *
 * @param {number} value - The value in REM units.
 * @returns {number} - The equivalent value in pixels.
 */
export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

/**
 * Converts pixels to REM units.
 *
 * @param {number} value - The value in pixels.
 * @returns {string} - The equivalent value in REM units as a string.
 */
export function pxToRem(value) {
  return `${value / 16}rem`;
}

/**
 * Generates responsive font sizes based on breakpoints.
 *
 * @param {Object} options - The font size options for different breakpoints.
 * @returns {Object} - CSS styles for responsive font sizes.
 */
export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

// Google Font
const FONT_PRIMARY = "Poppins, sans-serif";

// Typography styles
const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  // ... (Other heading and text styles)
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
