// Function to customize the styles of MuiCard and its components
export default function Card(theme) {
  return {
    // Styling for MuiCard component
    MuiCard: {
      styleOverrides: {
        // Styling the root element of MuiCard
        root: {
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    // Styling for MuiCardHeader component
    MuiCardHeader: {
      defaultProps: {
        // Default typography props for the title
        titleTypographyProps: { variant: "h6" },
        // Default typography props for the subheader
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        // Styling the root element of MuiCardHeader
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    // Styling for MuiCardContent component
    MuiCardContent: {
      styleOverrides: {
        // Styling the root element of MuiCardContent
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
