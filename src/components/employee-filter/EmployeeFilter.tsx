"use client";
import { useAppDispatch } from "@/store/hooks";
import { Position, Department } from "@/types/Emplyee";
import RangeInput from "@/ui/Range/Range";
import Search from "@/ui/Search/Search";
import {
  filterByPosition,
  filterByDepartment,
  filterByAge,
  searchEmployee,
} from "@/store/EmployeeSlice";
import Filter from "@/ui/Filter/Filter";

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
      <Search handleSearch={handleSearch} />
      {/* Filter by Position */}
      <Filter title="Position" options={Position} handleFilter={handleFilterByPosition}/>

      {/* Filter by Department */}
      <Filter title="Department" options={Department} handleFilter={handleFilterByDepartment}/>

      {/* Filter by Age */}
      <RangeInput min={0} max={100} filter={handleFilterByAge} />
    </div>
  );
}
