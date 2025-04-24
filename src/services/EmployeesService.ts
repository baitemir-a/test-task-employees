import { Employee } from "@/types/Emplyee";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EmployeesService = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/employees" }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({ query: () => "/" }),
    getEmployeeById: builder.query<Employee, string>({ query: (id) => `/${id}` }),
    createEmployees: builder.mutation<Employee, Employee>({
      query: (newEmployee) => ({
        url: "/",
        method: "POST",
        body: newEmployee,
      }),
    }),
    updateEmployee: builder.mutation<Employee, Employee>({
      query: (newEmployee) => ({
        url: `/${newEmployee.id}`,
        method: "PATCH",
        body: newEmployee,
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeesMutation,
  useUpdateEmployeeMutation,
} = EmployeesService;
