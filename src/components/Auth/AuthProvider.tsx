import { useState, useEffect  } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore   } from "../../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";

import { useAppDispatch } from "../../redux/hooks";
import { refreshUser } from "../../redux/auth/slice.js";
import { refreshFavorites } from "../../redux/favorites/slice.js";

import Loader from "../common/Loader.js";

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

  return <>{children}</>;
};

export default AuthProvider;
