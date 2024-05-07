import css from "./CriticalError.module.css";
import image from "../../assets/img/flyingSaucer.png";
import { useDispatch } from "react-redux";
import { fetchAll } from "../../redux/operations";

export const CriticalError = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAll());
  };

  return (
    <div className={css.wrapper}>
      <img className={css.image} src={image} alt="Flying saucer" />
      <p className={css.text}>Какой-то сверхразум все сломал</p>
      <span className={css.subtext}>Постараемся быстро починить</span>
      <span onClick={handleClick} className={css.tryAgain}>
        Попробовать снова
      </span>
    </div>
  );
};
