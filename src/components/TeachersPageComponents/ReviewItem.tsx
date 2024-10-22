import { type Review } from "../../redux/teachers/types";
import { Box, HStack, Avatar } from "@chakra-ui/react";

type ReviewItemProps = {
  review: Review;
};
const ReviewItem = ({
  review: { reviewer_name, reviewer_rating, comment },
}: ReviewItemProps) => {
  return (
    <Box as="li">
      <HStack spacing="12px">
        <Avatar boxSize="44px" name={reviewer_name} />
      </HStack>
    </Box>
  );
};

export default ReviewItem;
