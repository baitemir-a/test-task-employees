"use client";

import {
  useCreateEmployeesMutation,
  useGetEmployeesQuery,
} from "@/services/EmployeesService";
import {
  Department,
  Employee,
  Position,
  PositionDepartmentMap,
} from "@/types/Emplyee";
import Form from "@/ui/Form/Form";

export default function CreateForm() {
  const { refetch } = useGetEmployeesQuery();
  const [createEmployee, { isLoading, error }] =
  useCreateEmployeesMutation();

  async function createEmployeeHandler(e: React.FormEvent, employeeData:Employee) {
    e.preventDefault();
    await createEmployee(employeeData);
    refetch();
  }

  return <Form submit={createEmployeeHandler} isLoading={isLoading} error={error}/>;
}
