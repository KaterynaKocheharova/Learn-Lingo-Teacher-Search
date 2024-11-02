import { HStack } from "@chakra-ui/react";

type StyledBenefitsListProps = {
  children: React.ReactNode;
};

const StyledBenefitsList = ({ children }: StyledBenefitsListProps) => {
  return (
    <HStack
      as="ul"
      w="100%"
      wrap="wrap"
      p={{ base: "30px", lg: "40px 122px" }}
      gap={{ base: "50px", md: "70px", lg: "100px" }}
      borderRadius="30px"
      borderWidth={{ base: "1.5px", lg: "0" }}
      borderStyle={{ base: "dashed", lg: "none" }}
      borderColor={{ base: "brand.orange.900", lg: "transparent" }}
      justify={{ base: "center", lg: "space-between" }}
      bgImage={{ lg: "url('/benefits-border.png')" }}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {children}
    </HStack>
  );
};

export default StyledBenefitsList;
