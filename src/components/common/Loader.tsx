import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {

    return (
      <Flex
        pos="fixed"
        top="0"
        left="0"
        justify="center"
        align="center"
        bg="brand.gray.300"
        w="100%"
        height="100%"
        zIndex="999"
      >
        <Spinner color="brand.orange.900" size="xl" />
      </Flex>
    );
};

export default Loader;
