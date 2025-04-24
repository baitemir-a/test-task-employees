"use client";
import { useAppDispatch } from "@/store/hooks";
import { Position, Department, PositionDepartmentMap } from "@/types/Emplyee";
import RangeInput from "@/ui/Range/Range";
import Search from "@/ui/Search/Search";
import {
  filterByPosition,
  filterByDepartment,
  filterByAge,
  searchEmployee,
} from "@/store/EmployeeSlice";
import Filter from "@/ui/Filter/Filter";
import styles from "./EmployeeFilter.module.scss";
import { useState } from "react";

export default function EmployeeFilters() {
  const dispatch = useAppDispatch();
  const [selectedDepartment, setSelectedDepartment] = useState<Department | "">(
    ""
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchEmployee(event.target.value));
  };

  const handleFilterByPosition = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(filterByPosition(event.target.value as Position));
  };

  const handleFilterByDepartment = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const department = event.target.value as Department;
    setSelectedDepartment(department);
    dispatch(filterByDepartment(department));
  };

  const getFilteredEnum = (
    enumObj: typeof Position,
    allowedValues: string[]
  ): Record<string, string> => {
    return Object.entries(enumObj).reduce((acc, [key, value]) => {
      if (allowedValues.includes(value)) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
  };
  const handleFilterByAge = (values: number[]) => {
    dispatch(filterByAge([values[0], values[1]]));
  };

  const filteredPositions = Object.entries(PositionDepartmentMap)
    .filter(([_, dept]) => dept === selectedDepartment)
    .map(([position]) => position);

  const filteredEnum = getFilteredEnum(Position, filteredPositions);

  return (
    <div className={styles.EmployeeFilter}>
      <h3>Filters</h3>
      <div className={styles.filters}>
        <Search handleSearch={handleSearch} />
        <Filter
          title="Department"
          options={Department}
          handleFilter={handleFilterByDepartment}
        />
        <Filter
          title="Position"
          options={getFilteredEnum(Position, filteredPositions)}
          handleFilter={handleFilterByPosition}
        />

        <RangeInput min={0} max={100} filter={handleFilterByAge} />
      </div>
    </div>
  );
}
