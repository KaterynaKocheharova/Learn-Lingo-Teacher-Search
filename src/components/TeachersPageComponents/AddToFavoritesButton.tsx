import { useAppSelector } from "../../redux/hooks";
import { selectUserId, selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { useToast } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import { toastConfigs } from "../../utils/toast";
import { firestore } from "../../config/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Loader from "../common/Loader.js";

type AddToFavoritesButtonProps = {
  id: string;
};

const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const favorites = useAppSelector(selectFavorites);
  const userId = useAppSelector(selectUserId);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const toast = useToast();

  const updateFavorites = async (newFavorites: string[]) => {
    setIsLoading(true);
    try {
      await setDoc(doc(firestore, "users", userId), {
        favorites: newFavorites,
      });
    } catch (error) {
      console.error("Error updating favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (!isLoggedIn) {
      toast({
        ...toastConfigs,
        description: "Only logged-in users can add teachers to favorite",
        status: "error",
        duration: 9000,
      });
      return;
    }

    const userRef = doc(firestore, "users", userId);
    setIsLoading(true);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const prevFavorites = docSnap.data().favorites || [];
        const isFavorite = favorites.includes(id);
        const newFavorites = isFavorite
          ? prevFavorites.filter((item: string) => item !== id)
          : [...prevFavorites, id];

        await updateFavorites(newFavorites);
      }
    } catch (error) {
      console.error("Error in handleClick:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UnstyledButton
      pos="absolute"
      top="24px"
      right="24px"
      h="unset"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <FiHeart
          size="26"
          fill={
            favorites?.includes(id) && isLoggedIn ? "#F4C550" : "transparent"
          }
          stroke={favorites?.includes(id) ? "#F4C550" : "black"}
        />
      )}
    </UnstyledButton>
  );
};

export default AddToFavoritesButton;
