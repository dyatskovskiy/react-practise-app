import css from "./FiltersBar.module.css";

export const FiltersBar = () => {
  return (
    <ul className={css.wrapper}>
      <li>
        <button className={css.filterBtn}>All</button>
      </li>
      <li>
        <button className={css.filterBtn}>Designers</button>
      </li>
      <li>
        <button className={css.filterBtn}>Analysts</button>
      </li>
      <li>
        <button className={css.filterBtn}>Managers</button>
      </li>
      <li>
        <button className={css.filterBtn}>iOS</button>
      </li>
      <li>
        <button className={css.filterBtn}>Android</button>
      </li>
    </ul>
  );
};
