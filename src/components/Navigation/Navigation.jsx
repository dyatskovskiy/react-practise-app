import { FiltersBar } from "../FiltersBar/FiltersBar";
import { SearchBar } from "../SearchBar/SearchBar";
import css from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <header className={css.wrapper}>
      <SearchBar />
      <FiltersBar />
    </header>
  );
};
