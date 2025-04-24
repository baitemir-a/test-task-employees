"use client";
import {
  Department,
  Employee,
  Position,
  PositionDepartmentMap,
} from "@/types/Emplyee";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Input from "../Input/Input";

type Props = {
  submit: (e: React.FormEvent, employeeData: Employee) => void;
  data?: Employee;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};
const initEmployee:Employee = {
    id: uuidv4(),
    name: "",
    email: "",
    age: 0,
    position: Position.DevOps,
    department: Department.Development,
  }

export default function Form({ submit, data, isLoading, error }: Props) {
  const [employeeData, setEmployeeData] = useState<Employee>(initEmployee);

  const filteredPositions = Object.entries(PositionDepartmentMap)
    .filter(([, dept]) => dept === employeeData.department)
    .map(([pos]) => pos as Position);
  return (
    <form
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

      <div>
        <label>Department:</label>
        <select
          value={employeeData.department}
          onChange={(e) =>
            setEmployeeData((prev) => ({
              ...prev,
              department: e.target.value as Department,
              position: "" as Position,
            }))
          }
        >
          <option value="">Select Department</option>
          {Object.values(Department).map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Position:</label>
        <select
          value={employeeData.position}
          onChange={(e) =>
            setEmployeeData((prev) => ({
              ...prev,
              position: e.target.value as Position,
            }))
          }
          disabled={!employeeData.department}
        >
          <option value="">Select Position</option>
          {filteredPositions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Employee"}
      </button>

      {error && <p style={{ color: "red" }}>Error creating employee.</p>}
    </form>
  );
}
