import { SkeletonItem } from "../SkeletonItem/SkeletonItem";
import css from ".//SkeletonsList.module.css";

export const SkeletonsList = () => {
  return (
    <ul className={css.wrapper}>
      <li>
        <SkeletonItem />
      </li>
      <li>
        <SkeletonItem />
      </li>
      <li>
        <SkeletonItem />
      </li>
      <li>
        <SkeletonItem />
      </li>
      <li>
        <SkeletonItem />
      </li>
      <li>
        <SkeletonItem />
      </li>
    </ul>
  );
};
