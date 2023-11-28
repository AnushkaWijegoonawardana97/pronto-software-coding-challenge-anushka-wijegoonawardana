import {
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
} from "@mui/icons-material";
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

// Styling the root AppBar with background blur effect
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

// Styling the Toolbar within the AppBar, providing padding on larger screens
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 5),
  },
}));

/**
 * MobileNavigation component provides navigation buttons for moving the robot in a grid.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleMove - Function to handle robot movement.
 * @param {Object} props.robotPosition - The current position of the robot.
 * @returns {JSX.Element} - Rendered MobileNavigation component.
 */
const MobileNavigation = ({ handleMove, robotPosition }) => {
  /**
   * StyledIconButton function generates a styled navigation button based on direction.
   *
   * @param {string} title - The title for the tooltip.
   * @param {string} direction - The direction of the movement (Left, Up, Down, Right).
   * @param {boolean} disabled - Whether the button is disabled.
   * @returns {JSX.Element} - Styled navigation button with a tooltip.
   */
  const StyledIconButton = (title, direction, disabled) => (
    <Tooltip title={`Move ${title}`} data-testid={`Move ${title}`}>
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
          {/* Navigation buttons for moving the robot */}
          {StyledIconButton("Left", "Left", robotPosition.x === 1)}
          {StyledIconButton("Up", "Up", robotPosition.y === 1)}
          {StyledIconButton("Down", "Down", robotPosition.y === 5)}
          {StyledIconButton("Right", "Right", robotPosition.x === 5)}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

// PropTypes for type-checking and documentation
MobileNavigation.propTypes = {
  handleMove: PropTypes.func.isRequired,
  robotPosition: PropTypes.object.isRequired,
};

export default MobileNavigation;
