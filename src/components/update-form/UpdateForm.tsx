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
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
    id:string
};

export default function UpdateForm({id}: Props) {
  const { refetch } = useGetEmployeesQuery();
  const { data } = useGetEmployeeByIdQuery(id);
  const [updateEmployee, { isLoading, error }] = useUpdateEmployeeMutation();
  const router = useRouter();
  async function updateEmployeeHandler(
    e: React.FormEvent,
    employeeData: Employee
  ) {
    e.preventDefault();
    await updateEmployee(employeeData);
    refetch();
    router.replace("/")
  }
  return (
    <Form action="Update" submit={updateEmployeeHandler} data={data} isLoading={isLoading} error={error} />
  );
}
