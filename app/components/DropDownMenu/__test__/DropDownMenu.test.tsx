import { fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import DropDownMenu from "../DropDownMenu";

describe("DropDownMenu", () => {
  // Menu button click toggles menu visibility
  it("should toggle menu visibility when button is clicked", () => {
    // Arrange
    render(<DropDownMenu />);
    const button = screen.getByText("Login");
  });
});
