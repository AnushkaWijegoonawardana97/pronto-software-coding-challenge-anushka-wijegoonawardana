import React from "react";
import PropTypes from "prop-types";
import { GRID_ARRAY } from "../utilites/constantVariables";
import { Box, Card, CardMedia } from "@mui/material";

const RobotGrid = ({ robotPosition, teleportRobot, robotImage }) => {
  return (
    <Box
      rowGap={{ xs: 1, sm: 3 }}
      columnGap={{ xs: 1, sm: 3 }}
      display='grid'
      gridTemplateColumns={{
        xs: "repeat(5, 1fr)",
        sm: "repeat(5, 1fr)",
      }}>
      {GRID_ARRAY.map((_, rowIndex) =>
        GRID_ARRAY.map((_, colIndex) => (
          <Card
            sx={{ height: "15vh" }}
            key={`${rowIndex}${colIndex}`}
            onClick={() => teleportRobot(colIndex + 1, rowIndex + 1)}>
            {robotPosition.x === colIndex + 1 &&
              robotPosition.y === rowIndex + 1 && (
                <CardMedia
                  sx={{ height: "100%", objectFit: "contain" }}
                  image={robotImage}
                  title={`${rowIndex}${colIndex}`}
                />
              )}
          </Card>
        ))
      )}
    </Box>
  );
};

RobotGrid.propTypes = {
  robotPosition: PropTypes.object.isRequired,
  teleportRobot: PropTypes.func.isRequired,
  robotImage: PropTypes.string.isRequired,
};

export default RobotGrid;
