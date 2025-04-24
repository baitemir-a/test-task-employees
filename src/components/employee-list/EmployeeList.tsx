"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetEmployeesQuery } from "@/services/EmployeesService";
import { RootState } from "@/store/store";
import { Employee } from "@/types/Emplyee";
import Card from "@/ui/Card/Card";
import { useEffect } from "react";
import { setEmployees } from "@/store/EmployeeSlice";
import styles from './EmployeeList.module.scss'

export default function EmployeeList() {
  const dispatch = useAppDispatch();

  const { data: employeesData, error, isLoading } = useGetEmployeesQuery();
  const filteredEmployees = useAppSelector(
    (state: RootState) => state.employeeFilter.employees
  );

  useEffect(() => {
    if (employeesData) dispatch(setEmployees(employeesData));
  },[employeesData]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching employees.</p>;

  if (!employeesData && filteredEmployees.length === 0) {
    return <p>No employees available.</p>;
  }


  return (
    <div className={styles.EmployeeList}>
      {filteredEmployees  .map((employee: Employee) => (
        <Card key={employee.id.toString()} employee={employee} />
      ))}
    </div>
  );
}
