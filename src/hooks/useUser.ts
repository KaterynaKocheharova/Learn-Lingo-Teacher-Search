import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.js";
import { useAppDispatch } from "../redux/hooks";
import { refreshUser } from "../redux/auth/slice.js";

export const useUser = () => {
  const dispatch = useAppDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
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
};
