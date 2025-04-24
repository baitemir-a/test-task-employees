import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("renders the input field with correct placeholder", () => {
    render(<Search handleSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Search by name email ID");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("calls handleSearch on input change", () => {
    const handleSearchMock = jest.fn();
    render(<Search handleSearch={handleSearchMock} />);

    const input = screen.getByPlaceholderText("Search by name email ID");
    fireEvent.change(input, { target: { value: "John Doe" } });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
    expect(handleSearchMock.mock.calls[0][0].target.value).toBe("John Doe");
  });
});
