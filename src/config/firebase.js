import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { onSnapshot, doc } from "firebase/firestore";
import { ref, get, set } from "firebase/database";
import "../data/options.ts";
import {roundDownToNearestTen} from "../utils/roundToTheNearestTen.ts"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = auth.currentUser;
export const teachersDB = getDatabase(app);
export const firestore = getFirestore(app);

// move this function to languages filter component

export const getLangugesOptions = async () => {
  try {
    const languagesRef = ref(teachersDB, "languages/");
    const languagesSnapshot = await get(languagesRef);
    const langaugesOptions = languagesSnapshot.val().map((language) => {
      return { value: language, label: language };
    });
    console.log(langaugesOptions);
  } catch (error) {
    console.log(error);
  }
};


// this function should be moved to prices filter component


export const getPricesOptions = async () => {
  try {
    const pricesRef = ref(teachersDB, "prices/");
    const pricesSnapshot = await get(pricesRef);
    const pricesOptions = pricesSnapshot.val().map((price) => {
      const optionsFormatedPrice = roundDownToNearestTen(Number(price))
       return { value: optionsFormatedPrice, label: optionsFormatedPrice };
    });
    console.log(pricesOptions)
  } catch (error) {
    console.log(error);
  }
};

getPricesOptions()