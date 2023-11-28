//
import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Backdrop from "./Backdrop";
import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Backdrop(theme),
    Typography(theme)
  );
}
