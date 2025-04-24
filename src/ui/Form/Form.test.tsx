// src/components/Form/Form.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import { Department, Employee, Position } from "@/types/Emplyee";

describe("Form", () => {
  const mockSubmit = jest.fn();
  const testEmployee: Employee = {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    department: Department.Development,
    position: Position.FrontendDeveloper,
  };

  beforeEach(() => {
    render(
      <Form
        submit={mockSubmit}
        action="Update"
        isLoading={false}
        error={undefined}
        data={testEmployee}
      />
    );
  });

  it("renders form fields with passed data", () => {
    expect(screen.getByLabelText(/Name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/Email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/Age/i)).toHaveValue(30);
  });

  it("allows updating input values", () => {
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: "Jane" } });
    expect(nameInput).toHaveValue("Jane");
  });

  it("calls submit handler on form submit", () => {
    fireEvent.submit(screen.getByRole("button", { name: /Update Employee/i }));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
