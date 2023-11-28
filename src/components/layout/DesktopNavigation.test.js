import { fireEvent, render } from "@testing-library/react";
import DesktopNavigation from "./DesktopNavigation";

describe("DesktopNavigation", () => {
  const mockHandleMove = jest.fn();
  const mockRobotPosition = { x: 3, y: 3 }; // Assuming a 5x5 grid

  test("renders DesktopNavigation component", () => {
    const { container } = render(
      <DesktopNavigation
        handleMove={mockHandleMove}
        robotPosition={mockRobotPosition}
      />
    );

    // Check if the component renders without crashing
    expect(container).toBeInTheDocument();
  });

  test("calls handleMove with the correct parameters on button click", () => {
    const { getByText } = render(
      <DesktopNavigation
        handleMove={mockHandleMove}
        robotPosition={mockRobotPosition}
      />
    );

    // Click on the "Move Up" button
    fireEvent.click(getByText("Move Up"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Up");

    // Click on the "Move Right" button
    fireEvent.click(getByText("Move Right"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Right");

    // Click on the "Move Down" button
    fireEvent.click(getByText("Move Down"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Down");

    // Click on the "Move Left" button
    fireEvent.click(getByText("Move Left"));
    // Check if handleMove is called with the correct parameters
    expect(mockHandleMove).toHaveBeenCalledWith("Left");
  });
});
