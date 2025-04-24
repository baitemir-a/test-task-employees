"use client";
import {
  Department,
  Employee,
  Position,
  PositionDepartmentMap,
} from "@/types/Emplyee";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
type Props = {
  submit: (e: React.FormEvent, employeeData: Employee) => void;
  action:string
  data?: Employee;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};
const initEmployee: Employee = {
  id: uuidv4(),
  name: "",
  email: "",
  age: 0,
  position: Position.DevOps,
  department: Department.Development,
};

export default function Form({ submit, action, data, isLoading, error }: Props) {
  const [employeeData, setEmployeeData] = useState<Employee>(initEmployee);

  // Sync external data to local state once it's loaded
  useEffect(() => {
    if (data) {
      setEmployeeData(data);
    }
  }, [data]);
  const filteredPositions = Object.entries(PositionDepartmentMap)
    .filter(([, dept]) => dept === employeeData.department)
    .map(([pos]) => pos as Position);
  return (
    <form
      className={styles.Form}
      onSubmit={(e) => {
        submit(e, employeeData);
      }}
    >
      <Input
        label="Name"
        type="text"
        value={employeeData.name}
        onChange={(e) =>
          setEmployeeData((prev) => ({
            ...prev,
            name: (e.target as HTMLInputElement).value,
          }))
        }
      />
      <Input
        label="Email"
        type="email"
        value={employeeData.email}
        onChange={(e) =>
          setEmployeeData((prev) => ({
            ...prev,
            email: (e.target as HTMLInputElement).value,
          }))
        }
      />
      <Input
        label="Age"
        type="number"
        value={employeeData.age}
        onChange={(e) =>
          setEmployeeData((prev) => ({
            ...prev,
            age: Number((e.target as HTMLInputElement).value),
          }))
        }
      />
      <Select
        title="Department"
        options={Department}
        data={employeeData}
        value={employeeData.department}
        handleSelect={(e) => {
          setEmployeeData((prev) => ({
            ...prev,
            department: e.target.value as Department,
            position: "" as Position,
          }));
        }}
      />
      <Select
        title="Position"
        filtered={filteredPositions}
        data={employeeData}
        value={employeeData.position}
        handleSelect={(e) => {
          setEmployeeData((prev) => ({
            ...prev,
            position: e.target.value as Position,
          }));
        }}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? `Performing ${action}...` : `${action} Employee`}
      </Button>

      {error && <p style={{ color: "red" }}>Error creating employee.</p>}
    </form>
  );
}
