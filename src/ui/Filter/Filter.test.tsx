import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import { Position, Department } from "@/types/Emplyee";

describe("Filter component", () => {
  const handleFilter = jest.fn();

  it("renders correctly with Position options", () => {
    render(
      <Filter
        title="Position"
        options={Position}
        handleFilter={handleFilter}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Select Position")).toBeInTheDocument();

    // Проверяем некоторые позиции
    expect(screen.getByText("Manual QA")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("HR")).toBeInTheDocument();
  });

  it("calls handleFilter when an option is selected", () => {
    render(
      <Filter
        title="Department"
        options={Department}
        handleFilter={handleFilter}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: Department.QA } });

    expect(handleFilter).toHaveBeenCalledTimes(1);
    expect(handleFilter.mock.calls[0][0].target.value).toBe(Department.QA);
  });
});
