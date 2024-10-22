


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, get, set, push } from "firebase/database";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
//   databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const user = auth.currentUser;

// const teachersDB = getDatabase(app);




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid"; // Make sure to install uuid

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = auth.currentUser;

export const teachersDB = getDatabase(app);

// adding ids 

// const addIdsToTeachers = async () => {
//   const teachersRef = ref(teachersDB, 'teachers');
  
//   const snapshot = await get(teachersRef);
//   if (snapshot.exists()) {
//     const teachersData = snapshot.val();
    
//     // Loop through each teacher object and assign a unique ID
//     const updatedTeachers = {};
//     for (const [key, teacher] of Object.entries(teachersData)) {
//       updatedTeachers[key] = {
//         ...teacher,
//         id: uuidv4(), // Assign a unique ID
//       };
//     }

//     // Update the database with the new teacher objects
//     await set(teachersRef, updatedTeachers);
//     console.log("IDs added to teachers successfully.");
//   } else {
//     console.log("No teachers found.");
//   }
// };

// // Call the function to add IDs
// addIdsToTeachers().catch(console.error);
