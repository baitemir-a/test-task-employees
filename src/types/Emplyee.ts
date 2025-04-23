import { UUID } from "crypto";
import { UUIDTypes } from "uuid";

export interface Employee{
    "id": UUIDTypes,
    "name": string,
    "email": string,
    "age": number,
    "position": Position,
    "department": Department
}

export enum Position {
    ManualQA = "Manual QA",
    AutomationQA = "Automation QA",
    FrontendDeveloper = "Frontend Developer",
    BackendDeveloper = "Backend Developer",
    DevOps = "DevOps",
    ProjectManager = "Project Manager",
    HR = "HR",
    TeamLead = "Team Lead",
  }
  
  export enum Department {
    QA = "QA",
    Development = "Development",
    Management = "Management",
  }
  

export const PositionDepartmentMap: Record<Position, Department> = {
    [Position.ManualQA]: Department.QA,
    [Position.AutomationQA]: Department.QA,
    [Position.FrontendDeveloper]: Department.Development,
    [Position.BackendDeveloper]: Department.Development,
    [Position.DevOps]: Department.Development,
    [Position.ProjectManager]: Department.Management,
    [Position.HR]: Department.Management,
    [Position.TeamLead]: Department.Management,
  };
  

// const baitemir: Employee = {
//     id:1,
//     name:"Baitemir",
//     email:"bait@gmail.com",
//     age:20,
//     position: Position.DevOps,
//     department: PositionDepartmentMap[Position.DevOps],    
// }