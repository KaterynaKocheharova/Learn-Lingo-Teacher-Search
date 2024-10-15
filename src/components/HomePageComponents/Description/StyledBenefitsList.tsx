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
      borderWidth="1.5px"
      borderStyle="dashed"
      borderColor="brand.orange.900"
      p={{ base: "20px", lg: "40px 122px" }}
      gap={{ base: "50px", md: "70px", lg: "100px" }}
      borderRadius="30px"
      justify={{ base: "center", lg: "space-between" }}
    >
      {children}
    </HStack>
  );
};

export default StyledBenefitsList;
