'use client'
import {
  useGetEmployeeByIdQuery,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
} from "@/services/EmployeesService";
import { searchEmployee } from "@/store/EmployeeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { Employee } from "@/types/Emplyee";
import Form from "@/ui/Form/Form";
import React, { useEffect } from "react";

type Props = {
    id:string
};

export default function UpdateForm({id}: Props) {
  const { refetch } = useGetEmployeesQuery();
  const { data } = useGetEmployeeByIdQuery(id);
  const [updateEmployee, { isLoading, error }] = useUpdateEmployeeMutation();

  // const employees = useAppSelector(
  //   (state: RootState) => state.employeeFilter.employees
  // );
  // const employee = employees.find((e) => e.id === id);
  // console.log(employee);
  
  async function updateEmployeeHandler(
    e: React.FormEvent,
    employeeData: Employee
  ) {
    e.preventDefault();
    await updateEmployee(employeeData);
    refetch();
  }
  return (
    <Form action="Update" submit={updateEmployeeHandler} data={data} isLoading={isLoading} error={error} />
  );
}
