import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { bgBlur } from "../../utilites/cssStyles";

import {
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
} from "@mui/icons-material";

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.neutral }),
  boxShadow: "none",
  position: "fixed",
  top: "auto",
  bottom: "0",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 5),
  },
}));

const MobileNavigation = ({ handleMove, robotPosition }) => {
  const StyledIconButton = (title, direction, disabled) => (
    <Tooltip title={`Move ${title}`}>
      <IconButton
        color='primary'
        size='large'
        variant='contained'
        onClick={() => handleMove(direction)}
        disabled={disabled}>
        {React.createElement(
          {
            Left: ArrowCircleLeft,
            Up: ArrowCircleUp,
            Down: ArrowCircleDown,
            Right: ArrowCircleRight,
          }[direction]
        )}
      </IconButton>
    </Tooltip>
  );

  return (
    <StyledRoot>
      <StyledToolbar>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          sx={{ flexGrow: 1 }}>
          {StyledIconButton("Left", "Left", robotPosition.x === 1)}
          {StyledIconButton("Up", "Up", robotPosition.y === 1)}
          {StyledIconButton("Down", "Down", robotPosition.y === 5)}
          {StyledIconButton("Right", "Right", robotPosition.x === 5)}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

MobileNavigation.propTypes = {
  handleMove: PropTypes.func.isRequired,
  robotPosition: PropTypes.object.isRequired,
};

export default MobileNavigation;
