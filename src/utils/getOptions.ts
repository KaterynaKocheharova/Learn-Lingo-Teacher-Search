import { ref, get } from "firebase/database";
import { teachersDB } from "../config/firebase.js";
import { type Options } from "../data/options";

type GetOptions = (endpoint: string) => Promise<Options>;

export const getOptions: GetOptions = async (endpoint) => {
  try {
    const targetRef = ref(teachersDB, endpoint);
    const dataSnapshot = await get(targetRef);
    const options = dataSnapshot.val().map((item: string) => {
      return { value: item, label: item };
    });
    return options;
  } catch (error) {
    console.log(error);
  }
};
