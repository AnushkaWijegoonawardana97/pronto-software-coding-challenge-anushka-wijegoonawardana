// Function to customize and override styles for MuiTypography component
export default function Typography(theme) {
  return {
    // Targeting MuiTypography component for style overrides
    MuiTypography: {
      // Customizing styles for specific variants or states
      styleOverrides: {
        // Overrides for paragraphs to add bottom margin
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        // Overrides for text with gutterBottom to add smaller bottom margin
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
