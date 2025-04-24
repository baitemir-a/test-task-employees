import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input component", () => {
  it("renders input with correct label and value", () => {
    render(
      <Input
        label="Name"
        type="text"
        value="Baytemir"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("Name") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Baytemir");
  });

  it("calls onChange when input value changes", async () => {
    const mockChange = jest.fn();
    render(
      <Input
        label="Email"
        type="email"
        value=""
        onChange={mockChange}
      />
    );

    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "test@example.com");

    expect(mockChange).toHaveBeenCalled();
  });
});
