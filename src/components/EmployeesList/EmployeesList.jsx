import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import css from "./EmployeesList.module.css";

export const EmployeesList = ({ employees }) => {
  return (
    <ul className={css.wrapper}>
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            <EmployeeCard employee={employee} />
          </li>
        );
      })}
    </ul>
  );
};
