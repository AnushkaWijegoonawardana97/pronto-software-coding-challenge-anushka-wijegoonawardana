import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import colorPalette from "./colorPalette";
import customShadows from "./customShadows";
import GlobalStyles from "./globalStyles";
import ComponentsOverrides from "./overrides";
import shadows from "./shadows";
import typography from "./typography";

// Main theme provider component
const ThemeProvider = ({ children }) => {
  // Memoized theme options to prevent unnecessary re-renders
  const themeOptions = useMemo(
    () => ({
      palette: colorPalette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  // Create the MUI theme using the provided options
  const theme = createTheme(themeOptions);

  // Apply custom component overrides
  theme.components = ComponentsOverrides(theme);

  return (
    // MUI StyledEngineProvider is required for components using the styled utility
    <StyledEngineProvider>
      {/* MUI ThemeProvider for providing the theme to the entire component tree */}
      <MUIThemeProvider theme={theme}>
        {/* CssBaseline for consistent baseline styles across browsers */}
        <CssBaseline />
        {/* GlobalStyles for global custom styles */}
        <GlobalStyles />
        {/* Render the children components within the theme context */}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

// Prop types for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
