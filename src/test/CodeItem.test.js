import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // For DOM assertions
import CodeItem from "../components/CodeItem"

// Mock the SVG file
jest.mock("../assets/react.svg", () => "mocked-svg");

describe("CodeItem Component", () => {
  const codeItemProps = {
    name: "Example Code",
    code: "123456",
    timeRemaining: 60,
  };

  it("should render the component with correct props", () => {
    const { getByText } = render(<CodeItem {...codeItemProps} />);

    // Check if the component renders with the correct name
    expect(getByText("Example Code")).toBeInTheDocument();

    // Check if the component renders with the correct code
    expect(getByText("123 456")).toBeInTheDocument();

   
  });

  it("should render the React icon", () => {
    const { getByAltText } = render(<CodeItem {...codeItemProps} />);
    
    // Check if the component renders the React icon with the correct alt text
    expect(getByAltText("React Icon")).toBeInTheDocument();
  });

  // You can add more test cases to cover interactions or other scenarios
});
