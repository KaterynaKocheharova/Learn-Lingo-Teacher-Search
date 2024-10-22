import { type Teacher } from "../../redux/teachers/types";
import { VStack } from "@chakra-ui/react";
import ReviewItem from "./ReviewItem";

type ReviewsListProps = Pick<Teacher, "reviews">;

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <VStack
      as="ul"
      spacing="32px"
      // w={{ base: "300px", md: "400px" }}
      align="flex-start"
    >
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </VStack>
  );
};

export default ReviewsList;
