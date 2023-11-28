import Backdrop from "./Backdrop";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Paper from "./Paper";
import Typography from "./Typography";

// Function to combine and return overrides for multiple components
export default function ComponentsOverrides(theme) {
  // Combining overrides for different components
  return Object.assign(
    Card(theme), // Overrides for MuiCard component
    Input(theme), // Overrides for MuiInput component
    Paper(theme), // Overrides for MuiPaper component
    Button(theme), // Overrides for MuiButton component
    Backdrop(theme), // Overrides for MuiBackdrop component
    Typography(theme) // Overrides for MuiTypography component
  );
}
