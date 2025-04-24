"use client";

import {
  useCreateEmployeesMutation,
  useGetEmployeesQuery,
} from "@/services/EmployeesService";
import {
  Employee,
} from "@/types/Emplyee";
import Form from "@/ui/Form/Form";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const { refetch } = useGetEmployeesQuery();
  const [createEmployee, { isLoading, error }] =
  useCreateEmployeesMutation();
  const router = useRouter();
  async function createEmployeeHandler(e: React.FormEvent, employeeData:Employee) {
    e.preventDefault();
    await createEmployee(employeeData);
    refetch();
    router.replace("/")
  }

  return <Form action="Create" submit={createEmployeeHandler} isLoading={isLoading} error={error}/>;
}
