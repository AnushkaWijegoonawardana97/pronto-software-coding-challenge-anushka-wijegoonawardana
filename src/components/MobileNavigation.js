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
import { bgBlur } from "../utilites/cssStyles";

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
  return (
    <StyledRoot>
      <StyledToolbar>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          sx={{ flexGrow: 1 }}>
          <Tooltip title='Move Left'>
            <IconButton
              color='primary'
              size='large'
              variant='contained'
              onClick={() => handleMove("Left")}
              disabled={robotPosition.x === 1}>
              <ArrowCircleLeft />
            </IconButton>
          </Tooltip>

          <Tooltip title='Move Up'>
            <IconButton
              color='primary'
              size='large'
              variant='contained'
              onClick={() => handleMove("Up")}
              disabled={robotPosition.y === 1}>
              <ArrowCircleUp />
            </IconButton>
          </Tooltip>

          <Tooltip title='Move Down'>
            <IconButton
              color='primary'
              size='large'
              variant='contained'
              onClick={() => handleMove("Down")}
              disabled={robotPosition.y === 5}>
              <ArrowCircleDown />
            </IconButton>
          </Tooltip>

          <Tooltip title='Move Right'>
            <IconButton
              color='primary'
              size='large'
              variant='contained'
              onClick={() => handleMove("Right")}
              disabled={robotPosition.x === 5}>
              <ArrowCircleRight />
            </IconButton>
          </Tooltip>
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
