import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAll } from "../redux/operations";
import {
  selectEmployees,
  selectError,
  selectIsLoading,
} from "../redux/selectors";

import { Navigation } from "../components/Navigation/Navigation";
import { SkeletonsList } from "../components/SkeletonsList/SkeletonsList";
import { EmployeesList } from "../components/EmployeesList/EmployeesList";
import { CriticalError } from "../components/CriticalError/CriticalError";

export const Main = () => {
  const dispatch = useDispatch();

  const employees = useSelector(selectEmployees);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      {isLoading && <SkeletonsList />}
      {employees.length > 0 && <EmployeesList employees={employees} />}
      {isError && <CriticalError />}
    </div>
  );
};
