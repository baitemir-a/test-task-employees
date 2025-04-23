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
import styles from "./EmployeeFilter.module.scss";

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
    <div className={styles.EmployeeFilter}>
      <h3>Filters</h3>
      <div className={styles.filters}>
        <Search handleSearch={handleSearch} />
        <Filter
          title="Position"
          options={Position}
          handleFilter={handleFilterByPosition}
        />
        <Filter
          title="Department"
          options={Department}
          handleFilter={handleFilterByDepartment}
        />
        <RangeInput min={0} max={100} filter={handleFilterByAge} />
      </div>
    </div>
  );
}
