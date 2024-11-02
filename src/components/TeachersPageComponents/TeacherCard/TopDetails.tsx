import DetailsItem from "./DetailsItem";
import ThickBlackText from "../../common/ThickBlackText";
import RatingStar from "./RatingStar";

import { HStack } from "@chakra-ui/react";
import { LuBookOpen } from "react-icons/lu";

import { type Teacher } from "../../../redux/teachers/types";

type TopDetailsProps = Pick<
  Teacher,
  "lessons_done" | "rating" | "price_per_hour"
>;

const TopDetails = ({
  lessons_done,
  rating,
  price_per_hour,
}: TopDetailsProps) => {
  return (
    <HStack as="ul" wrap="wrap" spacing="32px" mr="64px">
      <DetailsItem>
        <LuBookOpen width="16px" height="16px" />
        Lessons online
      </DetailsItem>
      <DetailsItem>{` Lessons done: ${lessons_done}`}</DetailsItem>
      <DetailsItem>
        <RatingStar />
        {`Rating: ${rating}`}
      </DetailsItem>
      <DetailsItem hasLine={false}>
        Price / 1 hour{" "}
        <ThickBlackText color="green.400">{price_per_hour}$</ThickBlackText>
      </DetailsItem>
    </HStack>
  );
};

export default TopDetails;
