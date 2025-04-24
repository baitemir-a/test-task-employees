import { api } from "@/const/api";
import { Employee } from "@/types/Emplyee";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EmployeesService = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: `${api}/employees` }),
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
    deleteEmployees: builder.mutation<{ success: boolean }, string[]>({
        async queryFn(ids, _queryApi, _extraOptions, baseQuery) {
          const results = await Promise.all(
            ids.map(id => baseQuery({ url: `/${id}`, method: "DELETE" }))
          );
      
          const hasError = results.some(r => r.error);
      
          if (hasError) {
            return { error: { status: 500, data: "Failed to delete one or more employees" } };
          }
      
          return { data: { success: true } }; // ✅ This is the fix
        },
      }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeesMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeesMutation
} = EmployeesService;
