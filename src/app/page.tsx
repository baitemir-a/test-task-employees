import EmployeeFilter from "@/components/employee-filter/EmployeeFilter";
import EmployeeList from "@/components/employee-list/EmployeeList";

export default function Home() {
  return (
    <div>
      <EmployeeFilter/>
      <EmployeeList/>
    </div>
  );
}
