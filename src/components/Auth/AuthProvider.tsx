import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../redux/hooks";
import { refreshUser } from "../../redux/auth/slice.js";
import { auth } from "../../config/firebase.js";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          refreshUser({
            name: user.displayName as string,
            email: user.email as string,
          })
        );
      } else {
        console.log("No user is logged in.");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
