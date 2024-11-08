import { useAppSelector } from "../../redux/hooks";
import { selectUserEmail, selectUserName } from "../../redux/auth/selectors";
import { HStack } from "@chakra-ui/react";
import ThickBlackText from "../common/ThickBlackText";

const Greeting = () => {
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);
  return (
    <HStack>
      <ThickBlackText
        color="brand.orange.800"
        bg="brand.black.400"
        padding="8px"
        borderRadius="5px"
      >
        Hello!
      </ThickBlackText>
      <ThickBlackText bg="brand.orange.800" padding="8px" borderRadius="5px">
        {userName || userEmail || ""}
      </ThickBlackText>
    </HStack>
  );
};

export default Greeting;
