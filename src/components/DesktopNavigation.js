import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Button } from "@mui/material";

const DesktopNavigation = ({ handleMove }) => {
  return (
    <Card
      sx={{
        p: 3,
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        rowGap={1}
        columnGap={1}
        display='grid'
        gridTemplateColumns='repeat(4, 1fr)'>
        <Button onClick={() => handleMove("Up")}>Move North</Button>
        <Button onClick={() => handleMove("Right")}>Move East</Button>
        <Button onClick={() => handleMove("Down")}>Move South</Button>
        <Button onClick={() => handleMove("Left")}>Move West</Button>
      </Box>
    </Card>
  );
};

DesktopNavigation.propTypes = { handleMove: PropTypes.func.isRequired };

export default DesktopNavigation;
