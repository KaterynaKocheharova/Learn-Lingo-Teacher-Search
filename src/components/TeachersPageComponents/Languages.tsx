import { HStack, Box } from "@chakra-ui/react";
import { type Teacher } from "../../redux/teachers/types";

type LanguagesProps = Pick<Teacher, "levels">;

const Languages = ({ levels }: LanguagesProps) => {
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
          >
            #{level}
          </Box>
        );
      })}
    </HStack>
  );
};

export default Languages;
