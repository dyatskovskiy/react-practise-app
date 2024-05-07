import { LuSearch } from "react-icons/lu";
import { TbListTree } from "react-icons/tb";
import css from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div>
      <h1 className={css.title}>Поиск</h1>
      <div className={css.fieldWrapper}>
        <LuSearch className={css.searchIcon} size={24} />
        <input
          className={css.searchField}
          type="text"
          placeholder="Введи имя, тег, почту..."
        />
        <button className={css.listButton}>
          <TbListTree className={css.listIcon} size={24} />
        </button>
      </div>
    </div>
  );
};
