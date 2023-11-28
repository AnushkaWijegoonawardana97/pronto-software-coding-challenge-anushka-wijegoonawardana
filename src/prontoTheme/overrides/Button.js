import { alpha } from "@mui/material/styles";

// Function to customize the styles of MuiButton component
export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        // Styling the root element of MuiButton
        root: {
          "&:hover": {
            // Removing box shadow on hover
            boxShadow: "none",
          },
        },
        // Styling for large-sized buttons
        sizeLarge: {
          height: 48,
        },
        // Styling for contained inherit button
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        // Styling for contained primary button
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        // Styling for contained secondary button
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        // Styling for outlined inherit button
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        // Styling for text inherit button
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
