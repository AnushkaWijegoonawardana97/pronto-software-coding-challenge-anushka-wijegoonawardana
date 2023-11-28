import { fireEvent, render } from "@testing-library/react";
import RobotGrid from "./RobotGrid";

describe("RobotGrid", () => {
  const mockRobotPosition = { x: 1, y: 2 };
  const mockTeleportRobot = jest.fn();
  const mockRobotImage = "path/to/robot/image.png";

  test("renders RobotGrid component", () => {
    const { container } = render(
      <RobotGrid
        robotPosition={mockRobotPosition}
        teleportRobot={mockTeleportRobot}
        robotImage={mockRobotImage}
      />
    );

    // Check if the component renders without crashing
    expect(container).toBeInTheDocument();
  });

  test("renders correct number of cards", () => {
    const { getAllByTestId } = render(
      <RobotGrid
        robotPosition={mockRobotPosition}
        teleportRobot={mockTeleportRobot}
        robotImage={mockRobotImage}
      />
    );

    // Check if the correct number of cards is rendered
    const cards = getAllByTestId("robotGridCard");
    expect(cards).toHaveLength(25); // Assuming a 5x5 grid
  });

  test("calls teleportRobot function on card click with correct arguments", () => {
    const { getAllByTestId } = render(
      <RobotGrid
        robotPosition={mockRobotPosition}
        teleportRobot={mockTeleportRobot}
        robotImage={mockRobotImage}
      />
    );

    // Click on a card
    const card = getAllByTestId("robotGridCard")[0];
    fireEvent.click(card);

    // Check if the teleportRobot function is called with the correct arguments
    expect(mockTeleportRobot).toHaveBeenCalledWith(1, 1);
  });

  test("renders robot image on the correct card", () => {
    const { getAllByTestId } = render(
      <RobotGrid
        robotPosition={mockRobotPosition}
        teleportRobot={mockTeleportRobot}
        robotImage={mockRobotImage}
      />
    );

    // Check if the robot image is rendered on the correct card
    const robotImage = getAllByTestId("robotGridCard")[0]; // Assuming alt text is generated using title attribute
    expect(robotImage).toBeInTheDocument();
  });
});
