// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import {
//   getDatabase
// } from "firebase/database";

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
// export const teachersDB = getDatabase(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

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

const teachersDB = getDatabase(app);
const addUniqueIdToTeachers = async () => {
  const teachersRef = ref(teachersDB, 'teachers');
  try {
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const teacherKey = childSnapshot.key;

        const uniqueIdRef = ref(teachersDB, 'teachers/' + teacherKey + '/id');
        const uniqueId = uniqueIdRef.key || childSnapshot.ref.push().key; // Correctly generate a unique ID

        // Update the teacher data with the unique ID
        set(uniqueIdRef, uniqueId) // Set the generated unique ID in the existing record
          .then(() => {
            console.log(`Added ID ${uniqueId} to teacher ${teacherKey}`);
          })
          .catch((error) => {
            console.error('Error adding ID to teacher:', error);
          });
      });
    } else {
      console.log('No teachers found');
    }
  } catch (error) {
    console.error('Error adding IDs to teachers:', error);
  }
};

addUniqueIdToTeachers();

