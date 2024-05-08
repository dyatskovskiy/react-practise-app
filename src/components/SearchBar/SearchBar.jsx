import { LuSearch } from "react-icons/lu";
import { TbListTree } from "react-icons/tb";
import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectInputValue } from "../../redux/selectors";
import { setInputValue } from "../../redux/filtersSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector(selectInputValue);

  const handleInputChange = (value) => dispatch(setInputValue(value));

  return (
    <div>
      <h1 className={css.title}>Поиск</h1>

      <div className={css.fieldWrapper}>
        <input
          className={css.searchField}
          type="text"
          placeholder="Введи имя..."
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <LuSearch className={css.searchIcon} size={24} />

        <button className={css.listButton}>
          <TbListTree className={css.listIcon} size={24} />
        </button>
      </div>
    </div>
  );
};
