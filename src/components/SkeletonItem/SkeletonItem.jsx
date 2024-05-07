import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import css from "./SkeletonItem.module.css";

export const SkeletonItem = () => {
  return (
    <div className={css.wrapper}>
      <Skeleton circle={true} borderRadius="50%" width={72} height={72} />
      <div className={css.subWrapper}>
        <Skeleton width={144} height={16} />
        <Skeleton width={80} height={12} />
      </div>
    </div>
  );
};
