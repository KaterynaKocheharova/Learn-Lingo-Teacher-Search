import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, child, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import "../data/options.ts";

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

// const changeLevels = () => {
//   const teachersRef = ref(teachersDB, "teachers/");
//   get(teachersRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const allTeachers = snapshot.val();
//         const teachersWithUpdatedLevels = allTeachers.map((teacher) => {
//           const oldLevels = teacher.levels;
//           const newLevels = oldLevels.reduce((acc, level) => {
//             acc[level] = true;
//             return acc;
//           }, {});

//           return {
//             ...teacher,
//             levels: newLevels,
//           };
//         });
//         set(teachersRef, teachersWithUpdatedLevels);
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching teachers data:", error);
//     });
// };

// changeLevels();
