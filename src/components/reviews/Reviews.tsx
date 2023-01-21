import { nanoid } from "nanoid";

import { moviesTypes } from "../../types";

import ReviewsItem from "./reviewsItem/ReviewsItem";

import styles from "./Reviews.module.scss";

interface ReviewsProps {
  reviews: moviesTypes.ReviewsType[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {reviews.map((item) => (
          <ReviewsItem key={`${item.id}_${nanoid()}`} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
