import { Center, Text } from "@chakra-ui/react";

const PageError = () => {
  return (
    <Center pos="relative">
      <Text as="h2" color="red.400" fontSize="24px" pos="absolute">
        "Wooops. Something went wrong. Check out the internet connection or try
        again later"
      </Text>
    </Center>
  );
};

export default PageError;
