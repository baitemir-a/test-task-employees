import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RangeInput from "./Range";

describe("RangeInput component", () => {
  it("renders with correct initial values and calls filter on change", async () => {
    const mockFilter = jest.fn();
    render(<RangeInput min={0} max={100} filter={mockFilter} />);

    // Проверка наличия текста с начальными значениями
    expect(screen.getByText(/Min Age: 10/i)).toBeInTheDocument();
    expect(screen.getByText(/Max Age: 50/i)).toBeInTheDocument();

    // Используем userEvent для имитации изменения значения слайдера
    const sliders = screen.getAllByRole("slider");
    expect(sliders).toHaveLength(2);

    await userEvent.tab(); // активировать первый слайдер
    await userEvent.keyboard("{arrowRight}");

    // mockFilter должна быть вызвана
    expect(mockFilter).toHaveBeenCalled();
  });
});
