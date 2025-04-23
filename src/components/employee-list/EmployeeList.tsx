"use client";
import { useGetEmployeesQuery } from "@/services/EmployeesService";
import Card from "@/ui/Card/Card";

export default function EmployeeList() {
  const { data, error, isLoading } = useGetEmployeesQuery();
  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      {data?.map((emp) => (
        <Card employee={emp} key={emp.id.toString()} />
      ))}
    </div>
  );
}
