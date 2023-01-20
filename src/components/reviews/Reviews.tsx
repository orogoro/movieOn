import { nanoid } from "nanoid";

import { moviesTypes } from "../../types";

import ReviewsItem from "./reviewsItem/ReviewsItem";

interface ReviewsProps {
  reviews: moviesTypes.ReviewsType[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((item) => (
          <ReviewsItem key={`${item.id}_${nanoid()}`} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
