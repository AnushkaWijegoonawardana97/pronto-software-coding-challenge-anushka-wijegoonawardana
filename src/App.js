import { Box, Container, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BackgroundSets,
  CharacterSets,
  generateAvatar,
} from "robohash-avatars";
import DesktopNavigation from "./components/layout/DesktopNavigation";
import MobileNavigation from "./components/layout/MobileNavigation";
import RobotGrid from "./components/layout/RobotGrid";

// Styling the root container using Material-UI's styled utility
const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

// Styling the main content area using Material-UI's styled utility
const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const App = (props) => {
  const [robotPosition, setRobotPosition] = useState({ x: 1, y: 1 });
  const [robotImage, setRobotImage] = useState("");

  // Function to teleport the robot to a new position with a delay based on distance
  const teleportRobot = (x, y) => {
    const distance =
      Math.abs(x - robotPosition.x) + Math.abs(y - robotPosition.y);
    const teleportDelay = distance * 100;
    setTimeout(() => {
      setRobotPosition({ x, y });
    }, teleportDelay);
  };

  // Function to handle robot movement based on direction
  const handleMove = (direction) => {
    setRobotPosition((prevPosition) => ({
      x: Math.min(
        5,
        Math.max(
          1,
          direction === "Right"
            ? prevPosition.x + 1
            : direction === "Left"
            ? prevPosition.x - 1
            : prevPosition.x
        )
      ),
      y: Math.min(
        5,
        Math.max(
          1,
          direction === "Down"
            ? prevPosition.y + 1
            : direction === "Up"
            ? prevPosition.y - 1
            : prevPosition.y
        )
      ),
    }));
  };

  // useEffect hook to generate and set the robot's avatar image on component mount
  useEffect(() => {
    const roboAvata = generateAvatar({
      username: "tonystark",
      background: BackgroundSets.RandomBackground2,
      characters: CharacterSets.Robots,
      height: 400,
      width: 400,
    });
    setRobotImage(roboAvata);
  }, []);

  return (
    <StyledRoot>
      <Main>
        <Container maxWidth='xl'>
          <Box
            rowGap={3}
            columnGap={3}
            display='grid'
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "2fr 1fr",
            }}>
            <RobotGrid
              robotPosition={robotPosition}
              teleportRobot={teleportRobot}
              robotImage={robotImage}
            />

            <DesktopNavigation
              handleMove={handleMove}
              robotPosition={robotPosition}
            />
          </Box>
        </Container>

        <MobileNavigation
          handleMove={handleMove}
          robotPosition={robotPosition}
        />
      </Main>
    </StyledRoot>
  );
};

export default App;
