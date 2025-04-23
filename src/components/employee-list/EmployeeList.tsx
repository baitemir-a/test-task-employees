"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks"; // useSelector with proper types
import { useGetEmployeesQuery } from "@/services/EmployeesService";
import { RootState } from "@/store/store"; // RootState for types
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
  // console.log(filteredEmployees, employeesData);

  useEffect(() => {
    if (employeesData) dispatch(setEmployees(employeesData));
  },[employeesData]);
  // If loading or error, show respective messages
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching employees.</p>;

  // If no data and no filtered employees, show message
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
