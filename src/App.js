import { Box, Container, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BackgroundSets,
  CharacterSets,
  generateAvatar,
} from "robohash-avatars";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";
import RobotGrid from "./components/RobotGrid";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

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

  const teleportRobot = (x, y) => {
    const distance =
      Math.abs(x - robotPosition.x) + Math.abs(y - robotPosition.y);
    const teleportDelay = distance * 100;
    setTimeout(() => {
      setRobotPosition({ x, y });
    }, teleportDelay);
  };

  const handleMove = (direction) => {
    const newPosition = { ...robotPosition };

    switch (direction) {
      case "Up":
        newPosition.y = Math.max(1, newPosition.y - 1);
        break;
      case "Right":
        newPosition.x = Math.min(5, newPosition.x + 1);
        break;
      case "Down":
        newPosition.y = Math.min(5, newPosition.y + 1);
        break;
      case "Left":
        newPosition.x = Math.max(1, newPosition.x - 1);
        break;
      default:
        break;
    }

    teleportRobot(newPosition.x, newPosition.y);
  };

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

App.propTypes = {};

export default App;
