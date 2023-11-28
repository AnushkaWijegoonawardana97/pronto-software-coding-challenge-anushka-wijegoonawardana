import {
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
} from "@mui/icons-material";
import { Box, Button, Card } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const DesktopNavigation = ({ handleMove, robotPosition }) => {
  const StyledButton = (direction, label) => (
    <Button
      color='secondary'
      variant='contained'
      size='large'
      startIcon={React.createElement(
        {
          Left: ArrowCircleLeft,
          Up: ArrowCircleUp,
          Down: ArrowCircleDown,
          Right: ArrowCircleRight,
        }[direction]
      )}
      onClick={() => handleMove(direction)}
      sx={{ gridArea: direction.toLowerCase() }}
      disabled={
        (direction === "Up" && robotPosition.y === 1) ||
        (direction === "Down" && robotPosition.y === 5) ||
        (direction === "Left" && robotPosition.x === 1) ||
        (direction === "Right" && robotPosition.x === 5)
      }>
      {label}
    </Button>
  );

  return (
    <Card
      sx={{
        p: 3,
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `". up up ."
        "left left right right"
        ". down down ."`,
        }}>
        {StyledButton("Up", "Move Up")}
        {StyledButton("Right", "Move Right")}
        {StyledButton("Down", "Move Down")}
        {StyledButton("Left", "Move Left")}
      </Box>
    </Card>
  );
};

DesktopNavigation.propTypes = {
  handleMove: PropTypes.func.isRequired,
  robotPosition: PropTypes.object.isRequired,
};

export default DesktopNavigation;
