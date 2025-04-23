"use client";
import { useAppDispatch } from "@/store/hooks"; // useDispatch with proper types
import {
  filterByPosition,
  filterByDepartment,
  filterByAge,
  searchByName,
  searchByEmail,
  searchById,
} from "@/store/EmployeeSlice";
import { Position, Department, Employee } from "@/types/Emplyee";

export default function EmployeeFilters() {
  const dispatch = useAppDispatch();

  // Filter form handlers
  const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchByName(event.target.value));
  };

  const handleSearchByEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchByEmail(event.target.value));
  };

  const handleSearchById = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchById(event.target.value));
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

  const handleFilterByAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [minAge, maxAge] = event.target.value.split(",").map(Number);
    dispatch(filterByAge([minAge, maxAge]));
  };

  return (
    <div>
      <h3>Filters</h3>

      {/* Search by Name */}
      <div>
        <label htmlFor="searchByName">Search by Name</label>
        <input
          type="text"
          id="searchByName"
          placeholder="Enter name"
          onChange={handleSearchByName}
        />
      </div>

      {/* Search by Email */}
      <div>
        <label htmlFor="searchByEmail">Search by Email</label>
        <input
          type="email"
          id="searchByEmail"
          placeholder="Enter email"
          onChange={handleSearchByEmail}
        />
      </div>

      {/* Search by ID */}
      <div>
        <label htmlFor="searchById">Search by ID</label>
        <input
          type="text"
          id="searchById"
          placeholder="Enter employee ID"
          onChange={handleSearchById}
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
      <div>
        <label htmlFor="filterByAge">Filter by Age</label>
        <input
          type="text"
          id="filterByAge"
          placeholder="Enter age range (e.g. 25,40)"
          onChange={handleFilterByAge}
        />
      </div>
    </div>
  );
}
