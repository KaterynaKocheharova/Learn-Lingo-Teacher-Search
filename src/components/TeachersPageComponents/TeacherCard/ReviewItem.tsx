import { type Review } from "../../../redux/teachers/types";
import { Box, HStack, Avatar } from "@chakra-ui/react";
import ThickGrayText from "../../common/ThickGrayText";
import ThickBlackText from "../../common/ThickBlackText";
import RatingStar from "./RatingStar";
import { formatRating } from "../../../utils/formatRating";

type ReviewItemProps = {
  review: Review;
};
const ReviewItem = ({
  review: { reviewer_name, reviewer_rating, comment },
}: ReviewItemProps) => {
  return (
    <Box as="li">
      <HStack spacing="12px" mb="16px">
        <Avatar boxSize="44px" name={reviewer_name} />
        <Box>
          <ThickGrayText as="h4" mb="2px">
            {reviewer_name}
          </ThickGrayText>
          <HStack spacing="8px">
            <RatingStar />
            <ThickBlackText>{formatRating(reviewer_rating)}</ThickBlackText>
          </HStack>
        </Box>
      </HStack>{" "}
      <ThickBlackText>{comment}</ThickBlackText>
    </Box>
  );
};

export default ReviewItem;
