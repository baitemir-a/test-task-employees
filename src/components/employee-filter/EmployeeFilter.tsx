"use client";
import { useAppDispatch } from "@/store/hooks";
import {
  filterByPosition,
  filterByDepartment,
  filterByAge,
  searchEmployee,
} from "@/store/EmployeeSlice";
import { Position, Department } from "@/types/Emplyee";
import RangeInput from "@/ui/Range/Range";

export default function EmployeeFilters() {
  const dispatch = useAppDispatch();

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
    dispatch(filterByDepartment(event.target.value as Department));
  };

  const handleFilterByAge = (values: number[]) => {
    dispatch(filterByAge([values[0], values[1]]));
  };

  return (
    <div>
      <h3>Filters</h3>

      {/* Unified Search */}
      <div>
        <label htmlFor="searchInput">Search</label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search by name, email, or ID"
          onChange={handleSearch}
        />
      </div>

      {/* Filter by Position */}
      <div>
        <label htmlFor="filterByPosition">Filter by Position</label>
        <select id="filterByPosition" onChange={handleFilterByPosition}>
          <option value="">Select Position</option>
          {Object.values(Position).map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by Department */}
      <div>
        <label htmlFor="filterByDepartment">Filter by Department</label>
        <select id="filterByDepartment" onChange={handleFilterByDepartment}>
          <option value="">Select Department</option>
          {Object.values(Department).map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by Age */}
      <RangeInput min={0} max={100} filter={handleFilterByAge} />
    </div>
  );
}
