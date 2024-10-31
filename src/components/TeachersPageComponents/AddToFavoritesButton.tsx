// import { useAppSelector, useAppDispatch } from "../../redux/hooks";
// import { selectUserId, selectIsLoggedIn } from "../../redux/auth/selectors";
// import {
//   addToFavorites,
//   removeFromFavorites,
// } from "../../redux/favorites/slice.js";
// import { selectFavorites } from "../../redux/favorites/selectors.js";
// import { useToast } from "@chakra-ui/react";
// import { FiHeart } from "react-icons/fi";
// import UnstyledButton from "../common/UnstyledButton";
// import { toastConfigs } from "../../utils/toast";
// import { firestore } from "../../config/firebase.js";
// import { doc, setDoc } from "firebase/firestore";

// type AddToFavoritesButtonProps = {
//   id: string;
// };

// const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
//   const favorites = useAppSelector(selectFavorites);
//   const userId = useAppSelector(selectUserId);
//   const isLoggedIn = useAppSelector(selectIsLoggedIn);
//   const toast = useToast();
//   const dispatch = useAppDispatch();

//   const updateFavorites = async (newFavorites: string[]) => {
//     try {
//       setDoc(doc(firestore, "users", userId), {
//         favorites: newFavorites,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClick = async () => {
//     if (!isLoggedIn) {
//       toast({
//         ...toastConfigs,
//         description: "Only logged-in users can add teachers to favorite",
//         status: "error",
//         duration: 9000,
//       });
//       return;
//     }

//     if (favorites.includes(id)) {
//       dispatch(removeFromFavorites(id));
//     } else {
//       dispatch(addToFavorites(id));
//     }

//     updateFavorites(favorites);
//   };

//   return (
//     <>
//       <UnstyledButton
//         pos="absolute"
//         top="24px"
//         right="24px"
//         h="unset"
//         onClick={handleClick}
//       >
//         <FiHeart
//           size="26"
//           fill={
//             favorites?.includes(id) && isLoggedIn ? "#F4C550" : "transparent"
//           }
//           stroke={favorites?.includes(id) ? "#F4C550" : "black"}
//         />
//       </UnstyledButton>
//     </>
//   );
// };

// export default AddToFavoritesButton;

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectUserId, selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useToast } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import { toastConfigs } from "../../utils/toast";
import { firestore } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";

type AddToFavoritesButtonProps = {
  id: string;
};

const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
  const favorites = useAppSelector(selectFavorites);
  const userId = useAppSelector(selectUserId);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const updateFavorites = async (newFavorites: string[]) => {
    try {
      console.log(newFavorites);
      await setDoc(doc(firestore, "users", userId), {
        favorites: newFavorites,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!isLoggedIn) {
      toast({
        ...toastConfigs,
        description: "Only logged-in users can add teachers to favorites",
        status: "error",
        duration: 9000,
      });
      return;
    }

    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  useEffect(() => {
    if (isLoggedIn && userId) {
      if (favorites.length > 0) {
        updateFavorites(favorites);
      }
    }
  }, [favorites, isLoggedIn, userId]);

  return (
    <UnstyledButton
      pos="absolute"
      top="24px"
      right="24px"
      h="unset"
      onClick={handleClick}
    >
      <FiHeart
        size="26"
        fill={favorites?.includes(id) && isLoggedIn ? "#F4C550" : "transparent"}
        stroke={favorites?.includes(id) ? "#F4C550" : "black"}
      />
    </UnstyledButton>
  );
};

export default AddToFavoritesButton;
