"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  useDeleteEmployeesMutation,
  useGetEmployeesQuery,
} from "@/services/EmployeesService";
import { RootState } from "@/store/store";
import { Employee } from "@/types/Emplyee";
import Card from "@/ui/Card/Card";
import { useEffect, useState } from "react";
import { setEmployees } from "@/store/EmployeeSlice";
import styles from "./EmployeeList.module.scss";
import Button from "@/ui/Button/Button";

export default function EmployeeList() {
  const dispatch = useAppDispatch();
  const filteredEmployees = useAppSelector(
    (state: RootState) => state.employeeFilter.employees
  );
  const { data: employeesData, error, isLoading, refetch } = useGetEmployeesQuery();
  const [deleteEmployees, { isLoading: isDeleteLoading, error: deleteError }] =
    useDeleteEmployeesMutation();
  const [employeesToDelete, setEmployeesToDelete] = useState<string[]>([]);
  const handleDeleteEmployees = async () => {
    try {
      await deleteEmployees(employeesToDelete).unwrap();
      refetch()
      setEmployeesToDelete([])
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  useEffect(() => {
    if (employeesData) dispatch(setEmployees(employeesData));
  }, [employeesData]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching employees.</p>;

  if (!employeesData && filteredEmployees.length === 0) {
    return <p>No employees available.</p>;
  }

  return (
    <>
      {employeesToDelete.length > 0 ? (
        <div className={styles.deleteSection}>
          <p>Delete {employeesToDelete.length} employees?</p>
          <Button
            type="button"
            disabled={isDeleteLoading}
            click={handleDeleteEmployees}
          >
            Delete
          </Button>
          {deleteError ? <p>Error deleting</p> : null}
        </div>
      ) : null}
      <div className={styles.EmployeeList}>
        {filteredEmployees.map((employee: Employee) => (
          <Card
            key={employee.id.toString()}
            employee={employee}
            employeesToDelete={employeesToDelete}
            setToDelete={(id: string) =>
              setEmployeesToDelete((prev) =>
                prev.includes(id)
                  ? prev.filter((el) => el !== id)
                  : [...prev, id]
              )
            }
          />
        ))}
      </div>
    </>
  );
}
