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
        <Button
          color='secondary'
          variant='contained'
          size='large'
          startIcon={<ArrowCircleUp />}
          onClick={() => handleMove("Up")}
          sx={{ gridArea: "up" }}
          disabled={robotPosition.y === 1}>
          Move Up
        </Button>

        <Button
          color='secondary'
          variant='contained'
          size='large'
          startIcon={<ArrowCircleRight />}
          onClick={() => handleMove("Right")}
          sx={{ gridArea: "right" }}
          disabled={robotPosition.x === 5}>
          Move Right
        </Button>

        <Button
          color='secondary'
          variant='contained'
          size='large'
          startIcon={<ArrowCircleDown />}
          onClick={() => handleMove("Down")}
          sx={{ gridArea: "down" }}
          disabled={robotPosition.y === 5}>
          Move Down
        </Button>

        <Button
          color='secondary'
          variant='contained'
          size='large'
          startIcon={<ArrowCircleLeft />}
          onClick={() => handleMove("Left")}
          sx={{ gridArea: "left" }}
          disabled={robotPosition.x === 1}>
          Move Left
        </Button>
      </Box>
    </Card>
  );
};

DesktopNavigation.propTypes = {
  handleMove: PropTypes.func.isRequired,
  robotPosition: PropTypes.object.isRequired,
};

export default DesktopNavigation;
