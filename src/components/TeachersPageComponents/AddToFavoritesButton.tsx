import { useAppSelector } from "../../redux/hooks";
import { useToast } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import { toastConfigs } from "../../utils/toast";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

type AddToFavoritesButtonProps = {
  id: string;
};

const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const toast = useToast();
  const handleClick = () => {
    if (!isLoggedIn) {
      toast({
        ...toastConfigs,
        description: "Only logged in users can add teachers to favorite",
        status: "error",
        duration: 9000
      });
    } else {
      console.log("Adding");
    }
  };
  return (
    <UnstyledButton
      pos="absolute"
      top="24px"
      right="24px"
      h="unset"
      onClick={handleClick}
    >
      <FiHeart size="26" />
    </UnstyledButton>
  );
};

export default AddToFavoritesButton;
