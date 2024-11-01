import { Center, Text } from "@chakra-ui/react";

type PageErrorProps = {
  error?: string;
};

const PageError = ({ error }: PageErrorProps) => {
  return (
    <Center pos="relative">
      <Text as="h2" color="red.400" fontSize="24px" pos="absolute">
        {error ? error : "Wooops. Something went wrong. Check out the internet connection or try again later"}
      </Text>
    </Center>
  );
};

export default PageError;
