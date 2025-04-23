import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EmployeesService = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000/employees" }),
  endpoints: (builder) => ({
    getEmployees: builder.query({query: () => "/" }),
    createEmployees: builder.mutation({
      query: (newEmployee) => ({
        url: "/",
        method: "POST",
        body: newEmployee,
      }),
    }),
  }),
});
