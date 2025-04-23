import { Employee, Position, Department } from "@/types/Emplyee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EmployeeState = {
  employees: Employee[];
};

const initialState: EmployeeState = {
  employees: [],
};

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    filterByPosition: (
      state: EmployeeState,
      action: PayloadAction<Position>
    ) => {
      state.employees = state.employees.filter(
        (employee) => employee.position === action.payload
      );
    },

    filterByDepartment: (
      state: EmployeeState,
      action: PayloadAction<Department>
    ) => {
      state.employees = state.employees.filter(
        (employee) => employee.department === action.payload
      );
    },

    filterByAge: (
      state: EmployeeState,
      action: PayloadAction<[number, number]>
    ) => {
      const [minAge, maxAge] = action.payload;
      state.employees = state.employees.filter(
        (employee) => employee.age >= minAge && employee.age <= maxAge
      );
    },

    searchByName: (state: EmployeeState, action: PayloadAction<string>) => {
      state.employees = state.employees.filter((employee) =>
        employee.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    searchByEmail: (state: EmployeeState, action: PayloadAction<string>) => {
      state.employees = state.employees.filter((employee) =>
        employee.email.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    searchById: (state: EmployeeState, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (employee) => employee.id === action.payload
      );
    },
  },
});

export const employeeReducer = EmployeeSlice.reducer;

export const {
  filterByAge,
  filterByDepartment,
  filterByPosition,
  searchByEmail,
  searchById,
  searchByName,
} = EmployeeSlice.actions;
