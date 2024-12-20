import { useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { selectUserId, selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/favorites/slice";
import { selectFavorites } from "../../../redux/favorites/selectors";
import { useToast } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../../common/UnstyledButton";
import { toastConfigs } from "../../../config/toast";
import { firestore } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

type AddToFavoritesButtonProps = {
  id: string;
};

const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
  const favorites = useAppSelector(selectFavorites);
  const userId = useAppSelector(selectUserId);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [isHovered, setIsHovered] = useState(false);

  const toast = useToast();
  const dispatch = useAppDispatch();

  const updateFavorites = useCallback(
    async (newFavorites: string[]) => {
      try {
        await setDoc(doc(firestore, "users", userId), {
          favorites: newFavorites,
        });
      } catch (error) {
        console.error("Error updating favorites:", error);
      }
    },
    [userId]
  );

  const handleClick = () => {
    if (!isLoggedIn) {
      toast({
        ...toastConfigs,
        description: "Only logged-in users can add items to favorites",
        status: "error",
        duration: 9000,
      });
      return;
    }

    let updatedFavorites;
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id));
      updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      dispatch(addToFavorites(id));
      updatedFavorites = [...favorites, id];
    }

    updateFavorites(updatedFavorites);
  };

  return (
    <UnstyledButton
      pos="absolute"
      top="24px"
      right="24px"
      h="unset"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FiHeart
        size="26"
        fill={favorites?.includes(id) && isLoggedIn ? "#F4C550" : "transparent"}
        stroke={isHovered || favorites?.includes(id) ? "#F4C550" : "black"}
      />
    </UnstyledButton>
  );
};

export default AddToFavoritesButton;
