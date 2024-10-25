import { HStack, Box } from "@chakra-ui/react";
import { type Teacher } from "../../redux/teachers/types";

type LevelsProps = Pick<Teacher, "levels">;

const Levels = ({ levels }: LevelsProps) => {
  return (
    <HStack as="ul" wrap="wrap" spacing="8px">
      {levels.map((level, index) => {
        return (
          <Box
            py="8px"
            px="12px"
            rounded="35px"
            bg={index === 0 ? "brand.orange.900" : "transparent"}
            border="1px solid"
            borderColor={index !== 0 ? "brand.gray.300" : "brand.orange.900"}
            as="li"
            fontSize="14px"
            fontWeight="medium"
            mb="32px"
          >
            #{level}
          </Box>
        );
      })}
    </HStack>
  );
};

export default Levels;
