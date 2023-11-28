import { alpha } from '@mui/material/styles';

// Function to customize the styles of MuiBackdrop component
export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        // Styling the root element of MuiBackdrop
        root: {
          // Setting the background color with alpha transparency
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        // Styling the invisible state of MuiBackdrop
        invisible: {
          // Making the background transparent
          background: 'transparent',
        },
      },
    },
  };
}
