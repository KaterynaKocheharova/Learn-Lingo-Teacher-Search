import { Text } from "@chakra-ui/react";

export type StyledFormErrorType = {
  errorMessage: string | undefined;
};

const StyledFormError = ({ errorMessage }: StyledFormErrorType) => {
  if (errorMessage) {
    return (
      <Text
        fontSize="14px"
        position="absolute"
        bottom="-18px"
        left="0"
        color="red.300"
      >
        {errorMessage}
      </Text>
    );
  }
};

export default StyledFormError;
