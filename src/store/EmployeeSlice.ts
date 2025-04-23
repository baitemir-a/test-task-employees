import { Employee, Position, Department } from "@/types/Emplyee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EmployeeState = {
    allEmployees: Employee[];     
    employees: Employee[];        
  };
  
  const initialState: EmployeeState = {
    allEmployees: [],
    employees: [],
  };

export const EmployeeSlice = createSlice({
  name: "employeeFilter",
  initialState,
  reducers: {
    setEmployees: (state: EmployeeState, action: PayloadAction<Employee[]>) => {
        state.allEmployees = action.payload;
        state.employees = action.payload;
    },
    filterByPosition: (
      state: EmployeeState,
      action: PayloadAction<Position>
    ) => {
      state.employees = state.allEmployees.filter(
        (employee) => employee.position === action.payload
      );
    },

    filterByDepartment: (
      state: EmployeeState,
      action: PayloadAction<Department>
    ) => {
      state.employees = state.allEmployees.filter(
        (employee) => employee.department === action.payload
      );
    },

    filterByAge: (
      state: EmployeeState,
      action: PayloadAction<[number, number]>
    ) => {
      const [minAge, maxAge] = action.payload;
      state.employees = state.allEmployees.filter(
        (employee) => employee.age >= minAge && employee.age <= maxAge
      );
    },
    searchEmployee:(state: EmployeeState, action: PayloadAction<string>)=>{
        const query = action.payload.toLowerCase().trim();

        state.employees = state.allEmployees.filter((employee) => {
          return (
            employee.name.toLowerCase().includes(query) ||
            employee.email.toLowerCase().includes(query) ||
            employee.id.toString().toLowerCase().includes(query)
          );
        });
    },
  },
});

export const employeeReducer = EmployeeSlice.reducer;

export const {
  setEmployees,
  filterByAge,
  filterByDepartment,
  filterByPosition,
  searchEmployee
} = EmployeeSlice.actions;
