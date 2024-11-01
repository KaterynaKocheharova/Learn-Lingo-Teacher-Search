// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { useAppDispatch } from "../../redux/hooks";
// import { refreshUser } from "../../redux/auth/slice.js";
// import { auth } from "../../config/firebase.js";
// import { firestore } from "../../config/firebase.js";
// import { doc, getDoc } from "firebase/firestore";
// import { refreshFavorites } from "../../redux/favorites/slice.js";

// type AuthProviderProps = {
//   children: React.ReactNode;
// };

// const AuthProvider = ({ children }: AuthProviderProps) => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("Auth state changed");
//         dispatch(
//           refreshUser({
//             name: user.displayName as string,
//             email: user.email as string,
//             userId: user.uid as string,
//           })
//         );

//         const docRef = doc(firestore, "users", user.uid);
//         getDoc(docRef).then((docSnap) => {
//           if (docSnap.exists()) {
//             if (docSnap.data().favorites.length > 0) {
//               const newFavorites = docSnap.data().favorites;
//               dispatch(
//                 refreshFavorites({
//                   favoriteTeachersIds: newFavorites,
//                 })
//               );
//             }
//           } else {
//             console.log("No such document!");
//           }
//         });
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch]);

//   return <>{children}</>;
// };

// export default AuthProvider;

import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../redux/hooks";
import { refreshUser } from "../../redux/auth/slice.js";
import { auth } from "../../config/firebase.js";
import { firestore } from "../../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { refreshFavorites } from "../../redux/favorites/slice.js";
import Loader from "../common/Loader.js";
import { Box } from "@chakra-ui/react";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          refreshUser({
            name: user.displayName as string,
            email: user.email as string,
            userId: user.uid as string,
          })
        );

        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().favorites?.length > 0) {
          dispatch(
            refreshFavorites({
              favoriteTeachersIds: docSnap.data().favorites,
            })
          );
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return <Loader />;

  return <Box minHeight="100%">{children}</Box>;
};

export default AuthProvider;
