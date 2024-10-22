import { type Teacher, Review } from "../../redux/teachers/types";

type ReviewsListProps = Pick<Teacher, "reviews">;

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return <div>REVIEWS</div>;
};

export default ReviewsList;
