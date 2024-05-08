import { useDispatch, useSelector } from "react-redux";
import css from "./FiltersBar.module.css";
import { filters } from "../../redux/constants";
import { changeFilter } from "../../redux/filtersSlice";
import { fetchFiltered } from "../../redux/operations";
import { useEffect } from "react";
import { selectFilter } from "../../redux/selectors";

export const FiltersBar = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleClick = (filter) => {
    dispatch(changeFilter(filter));
  };

  useEffect(() => {
    dispatch(fetchFiltered(filter));
  }, [dispatch, filter]);

  return (
    <ul className={css.wrapper}>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.all)}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.design)}
        >
          Designers
        </button>
      </li>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.analytics)}
        >
          Analysts
        </button>
      </li>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.management)}
        >
          Managers
        </button>
      </li>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.ios)}
        >
          iOS
        </button>
      </li>
      <li>
        <button
          className={css.filterBtn}
          onClick={() => handleClick(filters.android)}
        >
          Android
        </button>
      </li>
    </ul>
  );
};
