import { Flex } from "@chakra-ui/react";

type HomePageElementsWrapperProps = {
  children: React.ReactNode;
};

const HomePageElementsWrapper = ({
  children,
}: HomePageElementsWrapperProps) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      gap="24px"
      justify={{ base: "center", lg: "space-between" }}
      align="flex-between"
    >
      {children}
    </Flex>
  );
};

export default HomePageElementsWrapper;
