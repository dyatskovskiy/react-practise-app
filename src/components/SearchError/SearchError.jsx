import img from "../../assets/img/search.png";
import css from "./SearchError.module.css";

export const SearchError = () => {
  return (
    <div className={css.wrapper}>
      <img className={css.image} src={img} alt="Search icon" />
      <p className={css.text}>Мы никого не нашли</p>
      <span className={css.subtext}>Попробуй скорректировать запрос</span>
    </div>
  );
};
