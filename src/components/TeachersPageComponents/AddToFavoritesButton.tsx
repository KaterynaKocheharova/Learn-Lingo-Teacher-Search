import { useAppSelector } from "../../redux/hooks";
import { selectUserId } from "../../redux/auth/selectors";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { useToast } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import { toastConfigs } from "../../utils/toast";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { firestore } from "../../config/firebase.js";
import { doc, getDoc, exists } from "firebase/firestore";

type AddToFavoritesButtonProps = {
  id: string;
};

type FavoritesType = {
  favorites: string[];
};

const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
  const favorites = useAppSelector(selectFavorites);
  console.log(favorites);
  const userId = useAppSelector(selectUserId);

  // set up favorites redux - refreshFavorites - favorites array []
  // refresh will work on teachers load and get triggered every time data changes and teachers page mounts
  // color depends on  wheather the favorites arrays includes current teacher id
  // delete or add depends on wheather the favorites arrays includes current teacher id
  // when clicking on the button if the user is logged in, addingFavorite, then the real time callback works and updates the redux
  // when clicking delete, we make a delete request, the callback works again

  // useEffect(() => {
  //   if (userId) {
  //     const userRef = doc(firestore, "users", userId);
  //     getDoc(userRef)
  //       .then((docSnap) => {
  //         if (docSnap.exists() && docSnap.data().favorites.includes(id)) {
  //           setIsFavorite(true);
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   } else {
  //     console.error("User ID is not defined");
  //   }
  // }, [userId, id]);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const toast = useToast();

  const handleClick = () => {
    if (!isLoggedIn) {
      toast({
        ...toastConfigs,
        description: "Only logged in users can add teachers to favorite",
        status: "error",
        duration: 9000,
      });
    }
  };

  return (
    <UnstyledButton
      bg={favorites.includes(id) ? "orange" : "green"}
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
