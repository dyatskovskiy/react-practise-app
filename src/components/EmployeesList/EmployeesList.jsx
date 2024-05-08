import { useSelector } from "react-redux";
import css from "./EmployeesList.module.css";

import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { selectInputValue } from "../../redux/selectors";
import { SearchError } from "../SearchError/SearchError";

export const EmployeesList = ({ employees }) => {
  const inputValue = useSelector(selectInputValue);

  const visibleEmployees = employees.filter((item) => {
    return (
      item.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <ul className={css.wrapper}>
      {visibleEmployees.map((employee) => {
        return (
          <li key={employee.id}>
            <EmployeeCard employee={employee} />
          </li>
        );
      })}

      {visibleEmployees.length === 0 && <SearchError />}
    </ul>
  );
};
