import css from "./EmployeeCard.module.css";

export const EmployeeCard = ({
  employee: { avatarUrl, firstName, lastName, position },
}) => {
  return (
    <div className={css.cardWrapper}>
      <img src={avatarUrl} alt="Employee" className={css.image} />

      <div className={css.infoWrapper}>
        <p className={css.name}>{firstName + " " + lastName}</p>
        <span className={css.position}>{position}</span>
      </div>
    </div>
  );
};
