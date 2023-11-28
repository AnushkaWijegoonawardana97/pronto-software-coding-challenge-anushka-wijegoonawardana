import { fireEvent, render } from "@testing-library/react";
import MobileNavigation from "./MobileNavigation";

describe("MobileNavigation", () => {
  const mockHandleMove = jest.fn();
  const mockRobotPosition = { x: 3, y: 3 }; // Assuming a 5x5 grid

  test("renders MobileNavigation component", () => {
    const { container } = render(
      <MobileNavigation
        handleMove={mockHandleMove}
        robotPosition={mockRobotPosition}
      />
    );

    // Check if the component renders without crashing
    expect(container).toBeInTheDocument();
  });

  test("calls handleMove with the correct parameters on button click", () => {
    const { getByTestId } = render(
      <MobileNavigation
        handleMove={mockHandleMove}
        robotPosition={mockRobotPosition}
      />
    );

    // Click on the "Left" button
    fireEvent.click(getByTestId("Move Left"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Left");

    // Click on the "Up" button
    fireEvent.click(getByTestId("Move Up"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Up");

    // Click on the "Down" button
    fireEvent.click(getByTestId("Move Down"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Down");

    // Click on the "Right" button
    fireEvent.click(getByTestId("Move Right"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Right");
  });
});
